function NavItem({category}){

    return (
        <>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">{category}</a>
        </li>
        </>
    )

}
    export default NavItem