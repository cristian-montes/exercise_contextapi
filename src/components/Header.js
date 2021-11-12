import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TheCart } from "../constex";
import './styles.css';


const Header = () => {
    const {cart, setCart} =  useContext(TheCart)
    return(
        <div>
            <span className='header'>Contex API CART</span>
            <ul className="nav">

                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/cart">Cart({cart.length})</Link>
                </li>

            </ul>
        </div>
    )
}


export default Header;