import CartWidget from "../CartWidget/CartWidget"
import NavItem from "../NavItem/NavItem"



function NavBar({categories}) {
    
return(

    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

        {categories.map((element, index) => <NavItem key ={index} category={element}/> )}
        <li>
            <CartWidget/>
        </li>
        </ul>
    </div>
    </div>
</nav>
    </>
)
}

export default NavBar