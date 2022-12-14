import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <li className={
            active
                ? 'nav-item active'
                : 'nav-item'
        }>
        <Link
            href={href}
            className="d-flex align-items-center"
        >
            {children}
        </Link>
        </li>
    );
}
