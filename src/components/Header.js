import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <div>
            <span>Contex API CART</span>
            <ul className="nav">

                <li className="prod">
                    <Link to ="/">Home</Link>
                </li>
                <li className="prod1">
                    <Link to ="/cart">Cart</Link>
                </li>

            </ul>
        </div>
    )
}


export default Header;