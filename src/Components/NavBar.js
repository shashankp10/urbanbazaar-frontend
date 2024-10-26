import React, { useState, useEffect }  from 'react'
import '../CSS/Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

// https://www.youtube.com/watch?v=sWVgMcz8Q44 --> search bar that fetch data dynamically
export default function NavBar() {
    const [isWideScreen, setIsWideScreen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth <= 900);
        };
            window.addEventListener('resize', handleResize);
            handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className='Navbar-main'>
        <div className='Navbar'>
            <h1 className={isWideScreen ? "urbanBazaarBreak" : "urbanBazaar"}>Urban{isWideScreen && <br />}Bazaar</h1>
            <SearchBar/>
            <img id="notification-icon" src="https://img.icons8.com/material-outlined/50/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
            <Dropdown className="custom-dropdown">
                <Dropdown.Toggle variant="transparent" id="dropdown-icon">
                    <div className='account'>
                        <CgProfile id="account-icon"/>
                        <p>Shashank</p>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu" style={{ background: '#d1d9daf6', width: '5vw' }}>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">My Orders</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="cart-icon-container">
                <BsCart3 id="cart-icon"/>
                {<span id="cart-count">{0}</span>}
                
            </div>
            <div className="wishlist-icon-container">
                <img id="wishlist-icon" src="https://img.icons8.com/windows/32/like--v1.png" alt="like--v1"/>
                {<span id="wishlist-count">{0}</span>}
            </div>
        </div>
        {/* <div class="line"></div>
        <div className='Navbar-1'>
            <a href="#fashion">Fashion</a>
            <a href="#electronics">Electronics</a>
            <a href="#books">Books</a>
            <a href="#grocery">Grocery</a>
            <a href="#furniture">Furniture</a>
            <a href="#beauty">Beauty</a>
        </div> */}
    </div>
  )
}
