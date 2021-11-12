import React, {createContext, useState } from "react";

export const TheCart = createContext()

const Context = ({children}) => {
    const [cart, setCart] = useState([]);

    return(
        <TheCart.Provider value={{cart, setCart}}>
            {children}
        </TheCart.Provider>
    )
}

export default Context;