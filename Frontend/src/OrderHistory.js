import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function OrderHistory({ image, title, price, username }) {
  const history = useHistory();
 
  useEffect(async () => {
    let item = {username,title,image,price };

    let result = await fetch("http://localhost:8084/addhistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result", result);
    alert("Product is Ordered");
    history.push("/");
    window.location.reload();
  }, []);

  return <div></div>;
}
export default OrderHistory;
