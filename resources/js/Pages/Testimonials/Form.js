import React, {useEffect, useState} from 'react';

import { useForm } from '@inertiajs/inertia-react';


export default function TestimonialForm(props) {
    const [ disabledForm, setDisabledForm ] = useState(true);
    const {data, setData, post, reset} = useForm({
        id: '',
        name: '',
        designation: '',
        image: '',
        content: '',
        status: true,
    });
    const [ url, setUrl ] = useState('');

    useEffect(() => {
        if(props.token){
            setUrl('');
            reset();
            setDisabledForm(false);
        }else{
            setUrl('');
            reset();
            setDisabledForm(true);
        }
        if(Object.keys(props.editData).length != 0){
            setData(props.editData);
            setUrl(baseUrl+'/uploads/testimonials/'+props.editData.image)
        }
      }, [props.token]);
      
    
    const onChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const handelImageChnage = (e) => {
        setData('image', e.target.files[0]);
        setUrl(window.URL.createObjectURL(e.target.files[0]));
    };
    const submit = (e) => {
        e.preventDefault();  
        if(data.id){
            post(route("testimonial_update", data.id));
        }else{
            post(route('testimonials.store'));
        }
        
        setUrl('');
        reset();
        setDisabledForm(true);

    };
   
    return (
        <div className="col-5">
        <div className={`card ${ disabledForm == true ? 'disabledDiv':''}`}>
            <div className="card-header border-bottom">
                <h4 className="card-title">{data.id == "" ? 'Add' : 'Update'} Testimonial</h4>
            </div>
            <div className="card-body">
                <form className="validate-form mt-2 pt-50" method="post" encType="multipart/form-data" onSubmit={submit}>
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="title">Name</label>
                            <input type="text" className="form-control" id="name" value={data.name}  onChange={onChange} name="name" placeholder="Name" />
                        </div>
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="tag">Designation</label>
                            <input type="text" className="form-control" id="designation" value={data.designation}  onChange={onChange} name="designation" placeholder="Designation" />
                        </div>
                        <div className="col-12 col-sm-12 mb-1">
                            <div className="d-flex">
                            {url &&
                                <a href="#" className="me-25" >
                                    <img src={url} id="account-upload-img" className="uploadedAvatar rounded me-50" alt="profile image" height="100" width="100" />
                                </a>
                            }
                                <div className="d-flex align-items-end mt-75 ms-1">
                                    <div>
                                        <label htmlFor ="account-upload" className="btn btn-sm btn-primary mb-75 me-75">Image Upload</label>
                                        <input type="file"  onChange={e => handelImageChnage(e )} id="account-upload" hidden accept="image/*" />
                                        <p className="mb-0">Allowed file types: png, jpg, jpeg.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="content">Content</label>
                            <textarea className="form-control" id="content" onChange={onChange} name="content" value={data.content} placeholder="Content"></textarea>
                        </div>
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="status">Status</label>
                            <select id="status" className="select2 form-select" name="status" value={data.status}  onChange={onChange}>
                                <option value="1">Active</option>
                                <option value="2">Inactive</option>
                            </select>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary mt-1 me-1">{data.id == "" ? 'Save' : 'Update'} changes</button>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
    )
}