import React from 'react'
import "./Homepage.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoryList from "./CategoryList";
import Category2 from './Category2';
import Category3 from './Category3';
import Category4 from './Category4';
import Footer from './Footer';
import AddProduct from './AddProduct';
import Item from './Item';


function HomePage() {
    return (
        <div className="homepage">
        <div className="home-box"></div>
           <img className="offers-image" src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/Home-Centre/HC-Mobile-2-Offer-060917.jpg"></img> 
    <CategoryList />
       <br></br>
<Category2 />
<br></br>
<Category3 />
<br></br>
<Category4 />
{/* <AddProduct /> */}
<Footer />
        
        </div>

        
    )
}

export default HomePage
