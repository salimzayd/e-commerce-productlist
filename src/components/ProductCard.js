import React from "react";
import "../components/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
    const handleButtonClick = (e, id) => {
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        const size = Math.max(button.offsetWidth, button.offsetHeight);
        const rect = button.getBoundingClientRect();

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        ripple.className = "ripple";
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
        onAddToCart(id);
    };

    return (
        <div className="product-card">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button
                className="button"
                onClick={(e) => handleButtonClick(e, product.id)}
            >
                <span className="cart-icon">🛒</span> Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
