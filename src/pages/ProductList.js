import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import SkeletonCard from "../components/SkeletonCard";
import { ToastContainer, toast } from "react-toastify";
import productsData from "../components/product.js";
import ScrollToTopButton from "../components/Scrolltop.js";
import "react-toastify/dist/ReactToastify.css";
import "../pages/ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        setTimeout(() => {
            if (Array.isArray(productsData)) {
                setProducts(productsData);
            } else {
                console.error("productsData is not an array:", productsData);
            }
            setLoading(false);
        }, 1000);
    }, []);

    const handleAddToCart = (id) => {
        toast.success("Product added to cart!");
    };

    const filteredProducts = Array.isArray(products)
        ? products
              .filter((product) =>
                  product.title.toLowerCase().includes(filter.toLowerCase())
              )
              .sort((a, b) => {
                  if (sort === "priceLowToHigh") return a.price - b.price;
                  if (sort === "priceHighToLow") return b.price - a.price;
                  return 0;
              })
        : [];

    return (
        <div className="product-list">
            <FilterBar onFilterChange={setFilter} onSortChange={setSort} />
            {loading ? (
                <div className="product-grid">
                    {Array(8)
                        .fill(0)
                        .map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                </div>
            ) : (
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            )}
            <ScrollToTopButton />
            <ToastContainer />
        </div>
    );
};

export default ProductList;
