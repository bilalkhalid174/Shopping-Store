import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../Body/Shimmer";
import "./ProductsItem.css";

const ProductsItem = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();

      if (!text) {
        throw new Error("Product not found (empty response).");
      }

      const product = JSON.parse(text);
      setProductDetail(product);
      setError(null);
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError(err.message);
      setProductDetail(null);
    }
  };

  if (error) {
    return <p style={{ color: "red" }}>⚠ {error}</p>;
  }

  if (!productDetail) {
    return <Shimmer />;
  }

  return (
    <div className="product-main">
      <div className="product-left">
        <img
          src={productDetail.image}
          alt={productDetail.title}
          className="product-image"
        />
      </div>

      <div className="product-right">
        <h2 className="product-title">{productDetail.title}</h2>
        <p className="product-price">${productDetail.price}</p>
        <p className="product-description">{productDetail.description}</p>
        <p className="product-category">{productDetail.category}</p>
      </div>
    </div>
  );
};

export default ProductsItem;
