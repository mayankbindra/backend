import React, {useEffect, useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { useForm } from '@inertiajs/inertia-react';

import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';


export default function About(props) {
    
    const {data, setData, post} = useForm({
        ABOUT_SECTION_TITLE: '',
        ABOUT_SECTION_CONTENT: '',
        ABOUT_SECTION_IMAGE: '',
        ABOUT_SECTION_DISABLED: true,
    });
    const [isChecked, setIsChecked] = useState(true);

    const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
 

 const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
        let contentState = editorState.getCurrentContent();
        if (contentState.getPlainText()) {
            setData('ABOUT_SECTION_CONTENT', draftToHtml(convertToRaw(editorState.getCurrentContent())));
        }
    }
    const [ url, setUrl ] = useState('');

    const onChange = (event) => {
        setData(event.target.name, event.target.value);
        
    };
    const handelImageChnage = (e) => {
            setData('ABOUT_SECTION_IMAGE', e.target.files[0]);
            setUrl(window.URL.createObjectURL(e.target.files[0]));
    };
    const submit = (e) => {
        e.preventDefault();
        
        post(route('saveSettings'));
    };

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        setData('ABOUT_SECTION_DISABLED', isChecked)
    };

    useEffect(() => {
        if(props.config){
            if(props.config.ABOUT_SECTION_IMAGE){
               setUrl(baseUrl+'/uploads/about/'+props.config.ABOUT_SECTION_IMAGE);
            }
            setIsChecked(props.config.ABOUT_SECTION_DISABLED == 1 ? false : true); 

            if(props.config.ABOUT_SECTION_CONTENT){
                const blocksFromHTML = convertFromHTML(props.config.ABOUT_SECTION_CONTENT)
                const contentState = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
                )
                setEditorState(EditorState.createWithContent(contentState))
            }
           setData(props.config);
        }
      
    }, []);
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={''}
        >
             <div className="card">
                <div className="card-header border-bottom">
                    <h4 className="card-title">About Setting</h4>
                        <div className="d-flex align-items-center">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"  value="true"
                                        checked={isChecked}
                                        onChange={handleOnChange} 
                                        type="checkbox" id="inlineCheckbox1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Show Section</label>
                            </div>
                        </div>
                </div>
                <div className="card-body py-2 my-25">

                    <div className="d-flex">

                        <a href="#" className="me-25">
                            <img src={url} id="account-upload-img" className="uploadedAvatar rounded me-50" alt="profile image" height="100" width="100" />
                        </a>
                        <div className="d-flex align-items-end mt-75 ms-1">
                            <div>
                                <label htmlFor ="account-upload" className="btn btn-sm btn-primary mb-75 me-75">Logo Upload</label>
                                <input type="file"  onChange={e => handelImageChnage(e )} id="account-upload" hidden accept="image/*" />
                                <p className="mb-0">Allowed file types: png, jpg, jpeg.</p>
                            </div>
                        </div>
                    </div>
                  
                
                   
                    <form className="validate-form mt-2 pt-50" method="post" encType="multipart/form-data" onSubmit={submit}>
                        <div className="row">
                            <div className="col-12 col-sm-12 mb-1">
                                <label className="form-label" htmlFor ="companyName">Title</label>
                                <input type="text" className="form-control" id="companyName" value={data.ABOUT_SECTION_TITLE}  onChange={onChange} name="ABOUT_SECTION_TITLE" placeholder="Please enter Company name" />
                            </div>
                           
                            <div className="col-12 col-sm-12 mb-1">
                                <label className="form-label" htmlFor ="accountAddress">Address</label>
                                <Editor 
                                    editorState={editorState}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={onEditorStateChange}
                                    editorStyle={{ height: "300px" }}
                                    />
                            </div>
                            
                           
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary mt-1 me-1">Save changes</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </Authenticated>
        
    );
}
