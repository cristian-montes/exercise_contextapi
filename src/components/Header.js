import React from "react";
import { Link } from "react-router-dom";
import './styles.css';


const Header = () => {
    return(
        <div>
            <span className='header'>Contex API CART</span>
            <ul className="nav">

                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/cart">Cart</Link>
                </li>

            </ul>
        </div>
    )
}


export default Header;