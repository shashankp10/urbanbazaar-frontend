import React, { useState, useEffect } from 'react';
import '../CSS/Navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isWideScreen, setIsWideScreen] = useState(true);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const userName = "Shashank"; 

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsWideScreen(width > 950);
            setIsMediumScreen(width > 560 && width <= 950);
            setIsMobileView(width <= 560);
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
                {isMobileView && (
                    <Dropdown className="menu-dropdown">
                        <Dropdown.Toggle variant="transparent" id="menu-dropdown">
                            <HiOutlineMenu />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                Notifications <span className="count">0</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Wishlist <span className="count">0</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                <h1 className="urbanBazaar">
                    UrbanBazaar
                </h1>
                {isWideScreen && <SearchBar />}
                <div className={`icon-group ${isMediumScreen ? 'medium-screen' : ''}`}>
                    {!isMobileView && (
                        <>
                            <div className="notification-icon-container">
                                <img id="notification-icon" src="https://img.icons8.com/material-outlined/50/appointment-reminders--v1.png" alt="notification"/>
                                <span id="notification-count">0</span>
                            </div>
                            <div className="wishlist-icon-container">
                                <img id="wishlist-icon" src="https://img.icons8.com/windows/32/like--v1.png" alt="wishlist"/>
                                <span id="wishlist-count">0</span>
                            </div>
                        </>
                    )}
                    <Dropdown className="custom-dropdown">
                        <Dropdown.Toggle variant="transparent" id="dropdown-icon">
                            <div className='account'>
                                <CgProfile id="account-icon"/>
                                {!isMobileView && <p>{userName}</p>}
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            {isMobileView && <Dropdown.Item>Hi, {userName}</Dropdown.Item>}
                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">My Orders</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="cart-icon-container">
                        <BsCart3 id="cart-icon"/>
                        <span id="cart-count">0</span>
                    </div>
                </div>
            </div>
            {!isWideScreen && <div className='search-bar-container'><SearchBar /></div>}
        </div>
    );
}