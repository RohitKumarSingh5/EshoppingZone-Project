import React,{useState,useEffect} from 'react';
import "./Item.css";
import { useStateValue } from "./StateProvider";
function Item({productsName,image,price,description,category}) {
  const [{ basket }, dispatch] = useStateValue();


  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: productsName,
        image: image,
        price: price,
        category: category,
      },
    });
  };
  
  return (
     
<div className="main">

 <div class="shop-card">
  <div class="title">
    {productsName}
  </div>
  <div class="desc">
   {description}
  </div>
  <div class="slider">

      <img className="pimage" src={image} />

  
  </div>

  <div class="cta">
    <div class="price">Rs {price}</div>
    <button class="btn" onClick={addToBasket}>Add to cart<span class="bg"></span></button>
  </div>
</div></div>
		

    )
}

export default Item
