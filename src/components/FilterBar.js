import React from "react";
import "../components/Filterbar.css"

const FilterBar = ({ onFilterChange, onSortChange }) => {
    return (
        <div className="filter-bar">
            <select onChange={(e) => onSortChange(e.target.value)}>
                <option value="">Sort By</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
            </select>
            <input
                type="text"
                placeholder="Search products"
                onChange={(e) => onFilterChange(e.target.value)}
            />
        </div>
    );
};

export default FilterBar;
