import React from "react";
import { useStateValue } from "./StateProvider";
import './Item.css';

function CheckoutProduct({  image, productsName, price}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //removes the item from the cart
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: productsName,
    });
  };

  return (
<div className="main">

 <div class="shop-card">
  <div class="title">
    {productsName}
  </div>

  <div class="slider">

      <img className="pimage" src={image} />

  
  </div>

  <div class="cta">
    <div class="price">Rs {price}</div>
     <button className="removecart" onClick={removeFromCart}>
          Remove from Cart
        </button>
  </div>
</div></div>
  );
}

export default CheckoutProduct;
