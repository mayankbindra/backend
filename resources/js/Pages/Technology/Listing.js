import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import ServiceForm from './Form'
import Pagination from '../Pagination/Index';
import { v4 as uuidv4 } from 'uuid';
import { Inertia } from "@inertiajs/inertia";

export default function Listing(props) {

    const {records} = props;
    const [ randomToken, setRandomToken] = useState('');
    const [ editData, setEditData] = useState({});
    const addNewRecord = () => {
        setEditData({});
        setRandomToken(uuidv4());
    };
    const deleteRecord = (record, e) => {
        if (confirm("Are you sure you want to delete this service?")) {
            Inertia.delete(route('technologies.destroy', record.id));
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
                                <h4 className="card-title">Technologies</h4>
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
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Content</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {records.data.map((record) => {
                                       return <tr>
                                            <td>
                                                {record.name}
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar pull-up my-0" title="Lilian Nenez">
                                                        <img src={baseUrl+'/uploads/technologies/'+record.image} alt="Avatar" height="26" width="26" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {record.content}
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
                                <Pagination links={records.links} />
                            </div>
                        </div>
                    </div>
                    <ServiceForm token={randomToken} editData={editData} />
                </div>
                
        </Authenticated>
        
    );
}
