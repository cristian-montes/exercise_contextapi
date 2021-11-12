import React, { useContext, useEffect, useState } from "react";
import { TheCart } from "../constex";
import { SingleProduct } from "./SingleProduct";

const Cart = () => {
    const {cart} =  useContext(TheCart)
    const [total, setTotal] = useState();

    useEffect(()=>{
        setTotal( cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])



    return(
        <div>
            <span style={{ fontSize:30 }}>May Cart</span>
            <br/>
            <span style={{ fontSize:30 }}>Total ${total}</span>
            <div className="productContainer">
                {cart.map((product) => (
                    <SingleProduct 
                        prod={product} 
                        key={product.id}
                    />
                ))}
            </div>
        </div>
    )
}


export default Cart;