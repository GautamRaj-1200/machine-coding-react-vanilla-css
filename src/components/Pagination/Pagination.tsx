import { useEffect, useState } from "react";
import ProductCardForPagination from "../ProductCardForPagination/ProductCardForPagination";
import "./pagination.css";

interface Product {
  id: number; // Add the id property to the Product interface
  title: string;
  thumbnail: string;
  price: number;
}

const Pagination = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=300");
    const dataJson = await data?.json();
    console.log(dataJson);
    setProducts(dataJson?.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="products">
        {products.map((p) => {
          return (
            <ProductCardForPagination
              key={p?.id}
              title={p?.title}
              thumbnail={p?.thumbnail}
              price={p?.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
