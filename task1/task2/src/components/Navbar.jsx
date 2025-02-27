import React from "react";
import '../Styles/navbar.css'
import { LuUserRound } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import {Link} from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";


function Navbar(){
    return(
    <>
        <div className="container">
            <div className="logo">botiga</div>
            {/* <input type="text" placeholder="search here"></input>  */}
            <div className="search-container">
            <select className="category-select">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
            </select>
        </div>
        <div class="search-box">

        <input type="text" className="search-input" placeholder="Search products..."/>
        <button type="submit">
           
            <div class="search-icon"> 
                <i class="fas fa-search"></i>
            </div>
        </button>
        </div>
            {/* <button className="search-btn"><i className="fas fa-search"></i></button> */}
           <div className="icons">
            <div className="user">
                <LuUserRound />
            </div>
            <div className="notification">
            <CiShoppingCart />
            </div>
            <div className="likes">
            <IoIosHeartEmpty />
            </div>
            </div>
            </div>
            <div className="navbar">
            <div className="dropdown">
            <span>Trending Categories</span> <i className="categories"></i>
        </div>
        <div className="nav-links">
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <Link to="/Vendors">Vendors</Link>
            <a href="/blog">Blog</a>
            <Link to="/Contact">Contact</Link>
        </div>
        <div className="contact">
            <i className="phone"></i> <IoCallOutline />
            800-123-4567
        </div>
        </div>
            </>
    )

}
export default Navbar