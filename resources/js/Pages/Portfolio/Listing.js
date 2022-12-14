import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import BannerForm from './Form'
import Pagination from '../Pagination/Index';
import { v4 as uuidv4 } from 'uuid';
import { Inertia } from "@inertiajs/inertia";

export default function Listing(props) {

    const {portfolio, technology} = props;
    const [ randomToken, setRandomToken] = useState('');
    const [ editData, setEditData] = useState({});
    const addNewRecord = () => {
        setEditData({});
        setRandomToken(uuidv4());
    };
    const deleteRecord = (record, e) => {
        if (confirm("Are you sure you want to delete this banner?")) {
            Inertia.delete(route('portfolio.destroy', record.id));
            setEditData({});
            setRandomToken('');
        }
    };
    const editRecord = (record, e) => {
        setEditData(record);
        setRandomToken(uuidv4());
    };
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={''}
        >
                <div className="row" id="table-hover-row">
                    <div className="col-7">
                        <div className="card">
                            <div className="card-header border-bottom">
                                <h4 className="card-title">Portfolio</h4>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check form-check-inline">
                                            <button type='button' className="btn btn-primary btn-sm" onClick={addNewRecord}>Add New</button>
                                        </div>
                                    </div>
                            </div>
                           
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Image</th>
                                            <th>Redirect Url</th>
                                            <th>Technologies</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {portfolio.data.map((record, i) => {
                                       return <tr key={i}>
                                            <td>
                                            {record.title}
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar pull-up my-0" title="Lilian Nenez">
                                                        <img src={baseUrl+'/uploads/portfolio/'+record.image} alt="Avatar" height="26" width="26" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{record.redirect == 1 ? record.link : '--'}</td>
                                            <td>
                                            {record.technologies.map((record, i) => {
                                                return  <span key={i} className="badge me-1 rounded-pill me-1 badge-light-success">{record.name}</span>
                                           })}
                                            </td>
                                            <td><span className={`badge rounded-pill me-1  ${record.status === 1 ? "badge-light-primary" : 'badge-light-danger'} `}>{record.status == 1 ? 'Active' : 'Inactive'}</span></td>
                                            <td>
                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-sm dropdown-toggle hide-arrow py-0" data-bs-toggle="dropdown">
                                                        <i data-feather="more-vertical"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="javascript:;" onClick={(e) => editRecord(record, e)}>
                                                            <i data-feather="edit-2" className="me-50"></i>
                                                            <span>Edit</span>
                                                        </a>
                                                        <a className="dropdown-item" href="javascript:;" onClick={(e) => deleteRecord(record, e)}>
                                                            <i data-feather="trash" className="me-50"></i>
                                                            <span>Delete</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                         })} 
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <Pagination links={portfolio.links} />
                            </div>
                        </div>
                    </div>
                    <BannerForm token={randomToken} technology={technology} editData={editData} />
                </div>
                
        </Authenticated>
        
    );
}
