import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/ProductView.css';
import Navbar from './NavBar';
import axios from 'axios';

export default function ProductView() {
  const location = useLocation();
  const item = location.state;

  if (!item) {
    return <p>No product details available.</p>;
  }

  const token = localStorage.getItem("token");
  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            "http://localhost:8080/urbanbazaar/api/v1/cart/add",
            {
                title: item.title,
                description: item.description,
                price: item.price,
                url: item.image,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`  
                }
            }
        );

        if (response.status === 200) {
          const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
          localStorage.setItem("cartCount", cartItems.length + 1); 
          alert("Added to cart");
        } else {
            alert("Failed to add to cart. Please try again.");
        }
    } catch (error) {
        console.error("Add to cart failed:", error);
        alert("An error occurred. Please try again later.");
    }
};
  const handleBuyNow = () => {
    console.log('Buy Now');
  }
  return (
    <div className='product-view'>
        <Navbar />
      <h1>{item.title}</h1>
      <div className='product-content'>
        <img src={require(`../Assets/${item.image}`)} alt={item.altText} className='product-image' />
        <div className='product-details'>
          <p><strong>Price:</strong> ₹{item.price}</p>
          <p><strong>Description:</strong> {item.description}</p>
        </div>
        
      </div>
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}} className='btn-container-item'>
            <button className='btn-item' onClick={handleBuyNow}>Buy Now</button>
            <button className='btn-item' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </div>
  );
}
