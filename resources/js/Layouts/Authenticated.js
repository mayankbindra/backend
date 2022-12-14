import React, {useEffect, useState} from 'react';
import Navigation from './Navigation'

export default function Authenticated({ auth, header, children, updatedLogo, updatedName }) {
    
    const [companyLogo, setCompanyLogo] = useState('');
    const [companyName, setCompanyName] = useState('');


    useEffect(() => {
        if(updatedLogo){
            setCompanyLogo(updatedLogo);
        }else{
            setCompanyLogo(baseUrl+'/uploads/settings/'+logo);
        }
        if(updatedLogo){
            setCompanyName(updatedName);
        }else{
            setCompanyName(company_name);
        }
    }, [logo, company_name, updatedLogo, updatedName]);
    return (
        <>
        <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
            <div className="navbar-container d-flex content">
                <ul className="nav navbar-nav align-items-center ms-auto">
                    <li className="nav-item dropdown dropdown-user"><a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="user-nav d-sm-flex d-none"><span className="user-name fw-bolder"> {auth.user.name}</span><span className="user-status">Admin</span></div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
                            
                            <a className="dropdown-item"  href={route('logout')} method="post" as="button"><i className="me-50" data-feather="power"></i> Logout</a>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </nav>
            <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
                <div className="navbar-header">
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item me-auto"><a className="navbar-brand" target="_blank" href={baseUrl}>
                                <span className="brand-logo"><img src={companyLogo} /></span>
                                <h2 className="brand-text">{companyName}</h2>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="shadow-bottom"></div>
               <Navigation/>
            </div>

        <div className="app-content content ">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper container-xxl p-0">
            <div className="content-header row">
            </div>
            <div className="content-body">
                <main>{children}</main>
            </div>  
        </div>  
        <footer className="footer footer-static footer-light">
        <p className="clearfix mb-0">
            <span className="float-md-start d-block d-md-inline-block mt-25">COPYRIGHT &copy; {new Date().getFullYear()}
            <a className="ms-25" href="#" target="_blank">24Coded</a><span className="d-none d-sm-inline-block">, All rights Reserved</span></span>
            </p>
            </footer>
        </div>  
       
        </>
    );
}
