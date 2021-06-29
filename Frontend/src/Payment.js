import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user-info"));

  useEffect(async () => {
    if (localStorage.getItem("user-info")) {
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div>
      {basket.map((item) => (
        <OrderHistory
          image={item.image}
          title={item.title}
          price={item.price}
          username={user.username}
        />
      ))}
    </div>
  );
}

export default Payment;
