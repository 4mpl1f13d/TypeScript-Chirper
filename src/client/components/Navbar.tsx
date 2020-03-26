import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = () => {

    return (
        // <div>
        //     <h1>Navbar</h1>
        // </div>

        <nav className="nav p- 2 shadow justify-content-end align-items-center">

            {/* <NavLink className="btn btn-link mx-1" exact to ='/'>Chirps</NavLink>
            <NavLink className="btn btn-link mx-1" exact to ='/compose'>Compose</NavLink>  OR SEE BELOW*/}

            <NavLink className="py-2 mx-2 text-dark" activeClassName="py-2 mx-2 text-dark border-bottom border-dark" exact to="/">Chirps</NavLink>
            <NavLink className="py-2 mx-2 text-dark" activeClassName="py-2 mx-2 text-dark border-bottom border-dark" exact to = "/compose" > Compose</NavLink >

        </nav >

    );
}


interface NavbarProps { }

export default Navbar;