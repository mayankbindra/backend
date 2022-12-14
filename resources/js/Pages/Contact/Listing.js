import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Pagination from '../Pagination/Index';


export default function Listing(props) {

    const {records} = props;
    const  formatDate = (date) => {
        if(date) {
            var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
        }else{
            return '-'
        }
        
    }
    return (
        
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={''}
        >
                <div className="row" id="table-hover-row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header border-bottom">
                                <h4 className="card-title">Contacts</h4>
                                   
                            </div>
                           
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Company Name</th>
                                            <th>Company Location</th>
                                            <th>Message</th>
                                            <th>Date</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {records.data.map((record, i) => {
                                       return <tr key={i}>
                                            <td>
                                                {record.name}
                                            </td>
                                            <td>
                                                {record.email}
                                            </td>
                                            <td>
                                                {record.company}
                                            </td>
                                            <td>
                                                {record.location}
                                            </td>
                                            <td>
                                                {record.message}
                                            </td>
                                            <td>
                                                {formatDate(record.created_at)}
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
                </div>
                
        </Authenticated>
        
    );
}
