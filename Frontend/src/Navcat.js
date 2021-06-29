import React from 'react';
import './CategoryList.css';
import {  Link } from "react-router-dom";

function Navcat({category}) {
    return (
        <div>
            <div className="cat-head">
			<span className="head-text">{category}</span>
            <br/>
            
		</div>
        <div className="cat-head">
        <Link to="/">
                <span className="head-text">Back to Home</span>
            </Link>
            </div>
            <div className="cat-head">
        <Link to="/checkout">
                <span className="head-text">Go to Cart</span>
            </Link>
            </div>
        </div>
    )
}

export default Navcat
