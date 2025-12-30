import React from "react";
import "./shimmer.css"; 

const Shimmer = () => {
    return (
        <div className="shimmer-wrapper">
        {Array(12).fill("").map((_, index) => (
            <div key={index} className="shimmer-card"></div>
        ))}
        </div>
    );
};

export default Shimmer;
