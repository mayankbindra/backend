import React, {useEffect, useState} from 'react';
import { useForm } from '@inertiajs/inertia-react';
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

export default function BannerForm(props) {
    const [value, setvalue] = useState('')

    const [ disabledForm, setDisabledForm ] = useState(true);
    const {data, setData, post, reset} = useForm({
        id: '',
        title: '',
        alt: '',
        image: '',
        link: '',
        technologies: '',
        redirect: true,
        status: true,
    });
    const [ url, setUrl ] = useState('');
    const [ options, setOptions ] = useState('');
    const  handleOnchange  =  val  => {
        setvalue(val)
        setData('technologies', val);

      }

    useEffect(() => {
        if(props.token){
            const technology = props.technology;
            let defaultOptions = [{ value: '', label: 'Select..' }]
             Object.keys(technology).forEach(function(key) {
                defaultOptions.push({ value: technology[key].id, label: technology[key].name });
             });
             setOptions(defaultOptions);

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
            setUrl(baseUrl+'/uploads/portfolio/'+props.editData.image)
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
            post(route("banner_update", data.id));
        }else{
            post(route('portfolio.store'));
        }
        
        setUrl('');
        reset();
        setDisabledForm(true);

    };
   
    return (
        <div className="col-5">
        <div className={`card ${ disabledForm == true ? 'disabledDiv':''}`}>
            <div className="card-header border-bottom">
                <h4 className="card-title">{data.id == "" ? 'Add' : 'Update'} Portfolio</h4>
            </div>
            <div className="card-body">
                <form className="validate-form mt-2 pt-50" method="post" encType="multipart/form-data" onSubmit={submit}>
                    <div className="row">
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="title">Title</label>
                            <input type="text" className="form-control" id="title" value={data.title}  onChange={onChange} name="title" placeholder="Title" />
                        </div>
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label">Technologies</label>
                            <MultiSelect
                                onChange={handleOnchange}
                                options={options}
                                className="form-control w-100"
                                width="100%"
                            />
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
                                        <label htmlFor ="account-upload" className="btn btn-sm btn-primary mb-75 me-75">Website Image Upload</label>
                                        <input type="file"  onChange={e => handelImageChnage(e )} id="account-upload" hidden accept="image/*" />
                                        <p className="mb-0">Allowed file types: png, jpg, jpeg.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="tag">Alt Tag</label>
                            <input type="text" className="form-control" id="tag" value={data.alt}  onChange={onChange} name="alt" placeholder="Alt Tag" />
                        </div>
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="link">Redirect Url</label>
                            <input type="text" className="form-control" id="link" value={data.link}  onChange={onChange} name="link" placeholder="Redirect Url" />
                        </div>
                        <div className="col-12 col-sm-12 mb-1">
                            <label className="form-label" htmlFor ="redirect">Redirect Type</label>
                            <select id="redirect" className="select2 form-select" name="redirect" value={data.redirect}  onChange={onChange}>
                                <option value="0">Open in same window</option>
                                <option value="1">Open in new window</option>
                            </select>
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