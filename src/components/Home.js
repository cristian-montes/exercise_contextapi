import React from "react";
import faker, { fake } from "faker";

const productsArray=[...Array(20)].map(()=> ({
    id:faker.datatype.number(),
    name:faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image()
}));

const Home = () => {

    console.log(productsArray);
    return(
        <div>
            HOME
        </div>
    )
}


export default Home;