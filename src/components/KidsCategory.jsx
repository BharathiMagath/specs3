// KidsCategory.jsx

import React from "react";
import "../styles/ShopByCategory.css";

const KidsCategory = () => {
  return (
    <div className="category-content">
      <div className="category-item">
        <img src="https://via.placeholder.com/100" alt="Eyeglasses" />
        <span>Eyeglasses</span>
      </div>
      <div className="category-item">
        <img src="https://via.placeholder.com/100" alt="Sunglasses" />
        <span>Sunglasses</span>
      </div>
      <div className="category-item">
        <img src="https://via.placeholder.com/100" alt="Computer Glasses" />
        <span>Computer Glasses</span>
      </div>
      <div className="category-item">
        <img src="https://via.placeholder.com/100" alt="Reading Glasses" />
        <span>Reading Glasses</span>
      </div>
      <div className="category-item">
        <img src="https://via.placeholder.com/100" alt="Contact Lenses" />
        <span>Contact Lenses</span>
      </div>
      <div className="category-item">
        <img src="https://via.placeholder.com/100" alt="Accessories" />
        <span>Accessories</span>
      </div>
    </div>
  );
};

export default KidsCategory;
