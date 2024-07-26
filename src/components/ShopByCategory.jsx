// ShopByCategory.jsx

import React, { useState } from "react";
import "../styles/ShopByCategory.css";
import MenCategory from "./MenCategory";
import WomenCategory from "./WomenCategory";
import KidsCategory from "./KidsCategory";

const ShopByCategory = () => {
  const [activeCategory, setActiveCategory] = useState("Men");

  return (
    <div className="shop-by-category">
      <h2>Shop by Category</h2>
      <div className="category-tabs">
        <button
          className={activeCategory === "Men" ? "active" : ""}
          onClick={() => setActiveCategory("Men")}
        >
          MEN
        </button>
        <button
          className={activeCategory === "Women" ? "active" : ""}
          onClick={() => setActiveCategory("Women")}
        >
          WOMEN
        </button>
        <button
          className={activeCategory === "Kids" ? "active" : ""}
          onClick={() => setActiveCategory("Kids")}
        >
          KIDS
        </button>
      </div>
      <div className="category-content">
        {activeCategory === "Men" && <MenCategory />}
        {activeCategory === "Women" && <WomenCategory />}
        {activeCategory === "Kids" && <KidsCategory />}
      </div>
    </div>
  );
};

export default ShopByCategory;
