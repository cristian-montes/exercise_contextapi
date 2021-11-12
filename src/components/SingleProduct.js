import React, { useContext } from "react";
import { TheCart } from "../constex";

export const SingleProduct= ({product}) => {
    const {cart, setCart} =  useContext(TheCart)
    return(
        <div className="products">
            <img src={product.image} alt={product.name}/>
            <div className="productDesc">
                <span style={{fontWeight: 700}}>{product.name}</span>
                <span>${product.price.substring(0,3)}</span>
            </div>

            { cart.includes(product) 
                    ?
             ( <button className="add"
                onClick={() =>{
                    setCart(cart.filter((c)=>  c.id !== product.id))
                }}
                >Remove from Cart
                </button>) 
                    : 
             ( <button className="add"
                    onClick={() =>{
                        setCart([...cart, product])
                    }}
                >Add to Cart
              </button>
              )}
                     
</div>
    )
}