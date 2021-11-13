import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { products } = CartState();

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;