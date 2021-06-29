import React, {useState} from 'react'
import "./Navigation.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Navigation() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [searchvalue, setSearchvalue] = useState("");
  let user = JSON.parse(localStorage.getItem("user-info"));

async function searchdb(searchvalue) {
    if (searchvalue.length > 0) {
      history.push("/searchp/" + searchvalue);
      // window.location.reload();
    } else {
      history.push("/");
    }
  }

  function signout() {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }

    return (
<div >
 <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
      <img className="nav_logo" src="images/logo-horizontal.jpeg"/> 
        <ul class="main-nav" id="js-menu">
            
            <li>
                <a href="#" class="nav-links">Home</a>
            </li>

            
            
            {user ? (
                <>
                <li onClick={signout}> 
                <a href="#" class="nav-links">SignOut</a>
              </li>
              <Link to="/myorders">
              <li>
                <a href="#" class="nav-links">My Orders</a>
            </li>
            </Link>
            {user.roles.includes("ROLE_ADMIN")?(
                <>
            <Link to="/admin">
            <li>
                <a href="#" class="nav-links">Admin Panel</a>
            </li>
            </Link>
            </>
            ):(null)
            }
            </>
            ) : (
                <>
            <Link to="/login">
            <li>
                <a href="#" class="nav-links">Login</a>
            </li>
            </Link>
            <Link to="/signup">
            <li>
                <a href="#" class="nav-links">Signup</a>
            </li>
             </Link>
             
             </>
            )}
           
            <li>
                <input class="search" type="text" onChange={(e) => setSearchvalue(e.target.value)}/>
            </li>
            <li>
                <a href="#"  onClick={() => searchdb(searchvalue)} class="searchBtn">Search</a>
            </li>
            <li class="nav-links">
                <Link to="/checkout" >
          <a href="#" class="nav-links">Cart</a>
             
            <span className="header__optionLineTwo header__basketCount">
            <a href="#" class="nav-links">{basket?.length}</a>
              
            </span>
        </Link>
            </li>
        </ul>
    </nav>
</div>
    )
}

export default Navigation
