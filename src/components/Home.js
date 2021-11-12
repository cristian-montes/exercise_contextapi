import React, { useState } from "react";
import faker from "faker";
import { SingleProduct } from "./SingleProduct";
import './styles.css';

faker.seed(100);

const productsArray=[...Array(20)].map(()=> ({
    id:faker.datatype.number(),
    name:faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image()
}));

const Home = () => {
    const [products] = useState(productsArray);
    const [cart, setCart] = useState([]);
    return(
        <div className="productContainer">
            {products.map((product) => (
                <SingleProduct key={product.id} product={product} cart={cart} setCart={setCart}/>
                ))
            }
        </div>
    )
}


export default Home;