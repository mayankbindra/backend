import React, {useEffect, useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { useForm } from '@inertiajs/inertia-react';

export default function Setting(props) {
    
    const {data, setData, post} = useForm({
        IMAGE: '',
        BG_IMAGE: '',
        RESUME: '',
        NAME: '',
        EMAIL: '',
        MOBILE: '',
        PROFILE_TITLE: '',
        DOB: '',
        COUNTRY: '',
        STATE: '',
        ADDRESS: '',
        ZIP_CODE: '',
        WEBSITE_URL: '',
        FACEBOOK_URL: '',
        LINKED_IN_URL: '',
        TWITTER_URL: '',
        PERSONAL_INTEREST: '',
        LOOKING_FOR_CHANGE: false,
        INSTAGRAM_URL: ''
    });
    const [ url, setUrl ] = useState('');
    const [ bgUrl, setBgUrl ] = useState('');
    const [ resumeUrl, setResumeUrl ] = useState('');
    const [isChecked, setIsChecked] = useState(false);



    const onChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const handelImageChnage = (e, type) => {
        setData(type, e.target.files[0]);
        if(type == "IMAGE"){
            setUrl(window.URL.createObjectURL(e.target.files[0]));
        }
        if(type == "BG_IMAGE"){
            setBgUrl(window.URL.createObjectURL(e.target.files[0]));
        }
    };
    const submit = (e) => {
        e.preventDefault();
        
        post(route('saveSettings'));
    };

    useEffect(() => {
        if(props.config){
            if(props.config.IMAGE){
               setUrl(baseUrl+'/uploads/settings/'+props.config.IMAGE);
            }
            if(props.config.BG_IMAGE){
               setBgUrl(baseUrl+'/uploads/settings/'+props.config.BG_IMAGE);
            }
            if(props.config.RESUME){
                setResumeUrl(baseUrl+'/uploads/settings/'+props.config.RESUME);
            }
            setIsChecked(props.config.LOOKING_FOR_CHANGE == 1 ? false : true); 

            setData(props.config);
        }
      
    }, []);
    const handleOnChange = () => {
        setIsChecked(!isChecked);
        setData('LOOKING_FOR_CHANGE', isChecked)
    };
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={''}
            updatedLogo={url}
            updatedName={data.NAME}

        >
             <div className="card">
                <div className="card-header border-bottom">
                    <h4 className="card-title">Personal Setting</h4>
                    <div className="d-flex align-items-center">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input"  value="true"
                                        checked={isChecked}
                                        onChange={handleOnChange} 
                                        type="checkbox" id="inlineCheckbox1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Looking for change</label>
                            </div>
                        </div>
                </div>
                <div className="card-body py-2 my-25">
                    <div className='row'>
                    <div className="d-flex col-12 col-sm-4">

                        <a href="#" className="me-25">
                            <img src={url} id="account-upload-img" className="uploadedAvatar rounded me-50" alt="profile image" height="100" width="100" />
                        </a>
                        <div className="d-flex align-items-end mt-75 ms-1">
                            <div>
                                <label htmlFor ="account-upload" className="btn btn-sm btn-primary mb-75 me-75">Signature/Logo Upload</label>
                                <input type="file"  onChange={e => handelImageChnage(e , 'IMAGE')} id="account-upload" hidden accept="image/*" />
                                <p className="mb-0">Allowed file types: png, jpg, jpeg.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex col-12 col-sm-4">
                        <a href="#" className="me-25">
                            <img src={bgUrl} id="account-upload-img" className="uploadedAvatar rounded me-50" alt="profile image" height="100" width="100" />
                        </a>
                        <div className="d-flex align-items-end mt-75 ms-1">
                            <div>
                                <label htmlFor ="account-fav-upload" className="btn btn-sm btn-primary mb-75 me-75">Upload Background Image</label>
                                <input type="file" id="account-fav-upload"   onChange={e => handelImageChnage(e , 'BG_IMAGE')} hidden accept="image/*" />
                                <p className="mb-0">Allowed file types: png, jpg, gif, jpeg.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex col-12 col-sm-4">
                        
                        <div className="d-flex align-items-end mt-75 ms-1">
                            <div>
                            {resumeUrl && (
                                <a downlaod href={resumeUrl} title="Download Resume" className="me-1">
                                    <i data-feather='download'  className="avatar-icon font-large-1"></i>
                                </a>
                            )}
                                <label htmlFor ="account-resume-upload" className="btn btn-sm btn-primary mb-75 me-75">Upload Resume</label>
                                <input type="file" id="account-resume-upload"   onChange={e => handelImageChnage(e , 'RESUME')} hidden  accept=".pdf,.docx" />
                                <p className="mb-0">Allowed file types: pdf, docx.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <form className="validate-form mt-2 pt-50" method="post" encType="multipart/form-data" onSubmit={submit}>
                        <div className="row">
                        <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="ProfileTitle">Job Profile Title</label>
                                <input type="text" className="form-control" id="ProfileTitle" value={data.PROFILE_TITLE}  onChange={onChange} name="PROFILE_TITLE" placeholder="Enter Job Profile Title" />
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="Name"> Name</label>
                                <input type="text" className="form-control" id="Name" value={data.NAME}  onChange={onChange} name="NAME" placeholder="Enter  name" />
                            </div>
                           
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="accountEmail">Email</label>
                                <input type="email" className="form-control" id="accountEmail" value={data.EMAIL}  onChange={onChange} name="EMAIL" placeholder="Enter  Email Address" />
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="DOB">Date of Birth</label>
                                <input type="text" className="form-control account-number-mask"  onChange={onChange} value={data.DOB} id="websiteUrl" name="DOB" placeholder="Enter Date of Birth" />
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="accountPhoneNumber">Mobile Number</label>
                                <input type="text" className="form-control account-number-mask" value={data.MOBILE}  onChange={onChange} id="accountPhoneNumber" name="MOBILE" placeholder="Enter  Phone Number" />
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="websiteUrl">Website URL</label>
                                <input type="text" className="form-control account-number-mask"  onChange={onChange} value={data.WEBSITE_URL} id="websiteUrl" name="WEBSITE_URL" placeholder="Enter Website Link" />
                            </div>
                           
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="country">Country</label>
                                <select id="country" className="select2 form-select" name="COUNTRY" value={data.COUNTRY}  onChange={onChange}>
                                    <option value="">Select Country</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="China">China</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="accountState">State</label>
                                <input type="text" className="form-control"  onChange={onChange} value={data.STATE} id="accountState" name="STATE" placeholder="State" />
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="accountAddress">Address</label>
                                <textarea type="text" className="form-control"  onChange={onChange} value={data.ADDRESS} id="accountAddress" name="ADDRESS" placeholder="Your Address" />
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <label className="form-label" htmlFor ="accountZipCode">Zip Code</label>
                                <input type="text" className="form-control account-zip-code"  onChange={onChange} value={data.ZIP_CODE} id="accountZipCode" name="ZIP_CODE" placeholder="Code"  />
                            </div>
                            <div className="col-12 col-sm-12 mb-1">
                                <label className="form-label" htmlFor ="personalInterest">Personal Interest</label>
                                <textarea type="text" className="form-control"  onChange={onChange} value={data.PERSONAL_INTEREST} id="personalInterest" name="PERSONAL_INTEREST" placeholder="Personal Interest" />
                            </div>
                            <div className="card-header border-bottom mb-2">
                                <h4 className="card-title">Socal Links</h4>
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <div className="input-group input-group-merge mb-2">
                                    <span className="input-group-text" id="basic-addon5"><i data-feather='facebook'></i></span>
                                    <input type="text" className="form-control"  onChange={onChange} value={data.FACEBOOK_URL} name="FACEBOOK_URL" placeholder="Facebook" aria-describedby="basic-addon5" />
                                </div>                           
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <div className="input-group input-group-merge mb-2">
                                    <span className="input-group-text" id="basic-addon4"><i data-feather='linkedin'></i></span>
                                    <input type="text" className="form-control"  onChange={onChange} value={data.LINKED_IN_URL}  name="LINKED_IN_URL"  placeholder="Linkedin" aria-describedby="basic-addon4" />
                                </div>                           
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <div className="input-group input-group-merge mb-2">
                                    <span className="input-group-text" id="basic-addon3"><i data-feather='twitter'></i></span>
                                    <input type="text" className="form-control"  onChange={onChange} value={data.TWITTER_URL} name="TWITTER_URL"  placeholder="Twitter" aria-describedby="basic-addon3" />
                                </div>                           
                            </div>
                            <div className="col-12 col-sm-6 mb-1">
                                <div className="input-group input-group-merge mb-2">
                                    <span className="input-group-text" id="basic-addon3"><i data-feather='instagram'></i></span>
                                    <input type="text" className="form-control"  onChange={onChange} value={data.INSTAGRAM_URL} name="INSTAGRAM_URL"  placeholder="Instagram" aria-describedby="basic-addon3" />
                                </div>                           
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
