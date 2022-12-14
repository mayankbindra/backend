import React, {useEffect, useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { useForm } from '@inertiajs/inertia-react';

import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import stateToHTML from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
 

export default function Comapny(props) {
    
    const {data, setData, post} = useForm({
        RESUME_SECTION_TITLE: '',
        RESUME_SECTION_CONTENT: '',
        RESUME_SECTION_DISABLED: true,
    });
    const [isChecked, setIsChecked] = useState(true);

    const [editorState, setEditorState] = useState(()=> EditorState.createEmpty())
 

 const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
        let contentState = editorState.getCurrentContent();
        if (contentState.getPlainText()) {
            console.log(editorState.getCurrentContent());
            setData('RESUME_SECTION_CONTENT', stateToHTML(convertToRaw(editorState.getCurrentContent())));
        }
    }

    const onChange = (event) => {
        setData(event.target.name, event.target.value);
        
    };
   
    const submit = (e) => {
        e.preventDefault();
        
        post(route('saveSettings'));
    };

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        setData('RESUME_SECTION_DISABLED', isChecked)
    };

    useEffect(() => {
        if(props.config){
            setIsChecked(props.config.RESUME_SECTION_DISABLED == 1 ? false : true); 

            if(props.config.RESUME_SECTION_CONTENT){
                console.log(stateFromHTML(props.config.RESUME_SECTION_CONTENT));
                const editorState = EditorState.createWithContent(
                    stateFromHTML(props.config.RESUME_SECTION_CONTENT)
                  );
                setEditorState(editorState)
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
                    <h4 className="card-title">Resume Setting</h4>
                        <div className="d-flex align-items-center">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"  value="Paneer"
                                        checked={isChecked}
                                        onChange={handleOnChange} 
                                        type="checkbox" id="inlineCheckbox1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Show Section</label>
                            </div>
                        </div>
                </div>
                <div className="card-body my-25">
                   
                    <form className="validate-form mt-2" method="post" encType="multipart/form-data" onSubmit={submit}>
                        <div className="row">
                            <div className="col-12 col-sm-12 mb-1">
                                <label className="form-label" htmlFor ="resumeName">Title</label>
                                <input type="text" className="form-control" id="resumeName" value={data.RESUME_SECTION_TITLE}  onChange={onChange} name="RESUME_SECTION_TITLE" placeholder="Please enter resume name" />
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
