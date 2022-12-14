import { InertiaLink } from "@inertiajs/inertia-react";
import react from "react";

export default function Pagination(props) {
    const {links} = props;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, number) => {
                    return (
                        <li key={number} className={`page-item ${link.url === null && "Disabled"} ${link.active && "active"}` }>
                            <InertiaLink className="page-link" href={link.url}>{link.label}</InertiaLink>
                        </li>
                    )
                })}
                
            </ul>
        </nav>
    )
}
