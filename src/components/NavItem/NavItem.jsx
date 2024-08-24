import { Link, NavLink } from "react-router-dom";
import "./navItem.css";
function NavItem({category}){

    return (
        <>
        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" href="#">{category}</NavLink>
        </li>
        </>
    )

}
    export default NavItem