import React, { useEffect } from "react";
import { useProducts } from "./API";

const ProductList = () => {
  const { products, fetchProduct, loading, setCount, count } = useProducts();

  useEffect(() => {
    fetchProduct();
  }, [count]);

  console.log(products);
  
  return (
    <div>
      <h2>Products</h2>
      {loading && <p>Loading...</p>}
      <ul>
        {products.map((p) => (
          <li >
          <img src={p.thumbnail} alt={p.title} /></li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>Load More</button>
    </div>
  );
};

export default ProductList;
