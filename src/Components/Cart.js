import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import "../CSS/Cart.css";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("http://localhost:8080/urbanbazaar/api/v1/cart/items", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, 
                'Content-Type': 'application/json' 
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCartItems(data); 
                localStorage.setItem("cartCount", data.length);
                setLoading(false);  
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); 
            });
    }, [token]);

    const onRemove = (id) => {
        console.log(id);
        console.log(typeof id);
        fetch(`http://localhost:8080/urbanbazaar/api/v1/cart/items/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`, 
                'Content-Type': 'application/json' 
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to remove item from cart');
                }
                setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
                localStorage.setItem("cartCount", cartItems.length - 1); 
            })
            .catch((error) => alert("Error removing item:", error));
    };
    if (loading) return <div>Loading...</div>;
    
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    const totalDiscount = cartItems.reduce((total, item) => total + (parseFloat(item.discount) || 0), 0);
    const finalAmount = totalPrice - totalDiscount;
    const platformFee = 3;
    const deliveryCharge = finalAmount > 500 ? 0 : 50;

    return (
        <div>
            <Navbar/>
            <div className="cart-heading">
                <h2>Shopping Cart</h2>
            </div>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            {item.url && (
                                <img 
                                    src={item.url} 
                                    alt={item.title} 
                                    className="cart-item-image"
                                />
                            )}
                            <div className="cart-item-details">
                                <h4 className="cart-item-title">{item.title}</h4>
                                <p className="cart-item-description">{item.description}</p>
                                <p className="cart-item-price">₹{item.price}</p>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                <div className="cart-item-actions">
                                    <button 
                                        className="remove" 
                                        onClick={() => onRemove(item.id)}
                                    >Remove</button>
                                </div>
                            </div>
                            <div className="out-of-stock">{item.isOutOfStock && 'Out Of Stock'}</div>
                        </div>
                    ))}
                </div>
                <div className="price-details">
                    <h3>Price Details</h3>
                    <div className="price-detail-item">
                        <span>Price ({cartItems.length} items)</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="price-detail-item">
                        <span>Discount</span>
                        <span>-₹{totalDiscount.toFixed(2)}</span>
                    </div>
                    <div className="price-detail-item">
                        <span>Platform Fee</span>
                        <span>₹{platformFee}</span>
                    </div>
                    <div className="price-detail-item">
                        <span>Delivery Charges</span>
                        <span>{deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}</span>
                    </div>
                    <div className="total-amount">
                        <h4>Total Amount</h4>
                        <h4>₹{(finalAmount + platformFee + deliveryCharge).toFixed(2)}</h4>
                    </div>
                    <button className="place-order">Place Order</button>
                </div>
            </div>
        </div>
    );
}
