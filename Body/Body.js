import './body.css';
import Card from '../Card/Card.js';
import React, { useEffect, useState } from "react";
import Shimmer from '../Body/Shimmer.js';

const Body = () => {
    const getPost = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products", { method: "GET" });
        if (!response.ok) {
        throw new Error("Failed to fetch products");
        }
        return response.json();
    } catch (error) {
        return null;
    }
    };

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
    getPost().then((products) => {
        setTimeout(() => {
        setData(products);
        setLoading(false);
        }, 1500); 
    });
    }, []);

    return (
    <div className="App">
        {loading ? (
        <Shimmer />
        ) : data && data.length > 0 ? (
        data.map((product) => (
            <Card key={product.id} product={product} />
        ))
        ) : (
        <p className="error-msg"> No products found. Please try again later.</p>
        )}
    </div>
    );
};

export default Body;
