import React, { createContext, useState, useContext } from "react";

// 1. Create Context
const ProductContext = createContext();

// 2. Provider Component
export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 10
        }`
      );

      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{ loading, products, count, setCount, fetchProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// 3. Custom Hook (for easy usage)
export const useProducts = () => useContext(ProductContext);
