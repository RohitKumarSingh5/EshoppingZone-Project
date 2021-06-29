import React from "react";
import StarIcon from "@material-ui/icons/Star";
function HistoryProducts({  title, image, price }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
    
        {/* <button className="removecart">Delete</button> */}
      </div>
    </div>
  );
}

export default HistoryProducts;
