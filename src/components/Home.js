import React, { useContext, useState } from "react";
import faker from "faker";
import { SingleProduct } from "./SingleProduct";
import './styles.css';
import { TheCart } from "../constex";


faker.seed(100);


const Home = () => {
  
    const productsArray=[...Array(20)].map(()=> ({
        id:faker.datatype.number(),
        name:faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }));

    const [products] = useState(productsArray);
   
    return(
        <div className="productContainer">
            {products.map((product) => (
                <SingleProduct key={product.id} product={product}/>
                ))
            }
        </div>
    )
}


export default Home;