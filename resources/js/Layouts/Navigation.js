import React from 'react';
import NavLink from '@/Components/NavLink';


export default function Navigation() {

    return (
        
        <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                
                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                <i data-feather="home"></i> Dashboard
                    </NavLink>

                <li className=" navigation-header"><span data-i18n="Apps &amp; Pages">Apps &amp; Pages</span><i data-feather="more-horizontal"></i>
                </li>
                <NavLink href={route('portfolio.index')} active={route().current('portfolio.index')}>
                    <i data-feather='sliders'></i> Portfolio
                </NavLink>
                <NavLink href={route('testimonials.index')} active={route().current('testimonials.index')}>
                    <i data-feather='message-square'></i> Testimonials
                </NavLink>
                <NavLink href={route('about')} active={route().current('about')}>
                    <i data-feather='settings'></i> About Info
                </NavLink>
                <NavLink href={route('technologies.index')} active={route().current('technologies.index')}>
                    <i data-feather='calendar'></i> Technologies
                </NavLink>
               
                <NavLink href={route('contacts.index')} active={route().current('contacts.index')}>
                    <i data-feather='grid'></i> Contact Queries
                </NavLink>
              
                <NavLink href={route('settings')} active={route().current('settings')}>
                <i data-feather='settings'></i> Settings
                    </NavLink>
            </ul>
        </div>    
    );
}
