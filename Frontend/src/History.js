import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import HistoryProducts from "./HistoryProducts";

function History() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const [data, setData] = useState([]);
  const history = useHistory();

  async function getData() {
    let result = await fetch(
      "http://localhost:8084/gethistory/" + user.username
    );
    result = await result.json();
    console.warn(result);
    setData(result);
  }
  useEffect(async () => {
    if (user) {
      getData();
    } else {
      history.push("/");
    }
  }, []);

  

  return (
    <div>
     <div className="cat-head">
        <Link to="/">
                <span className="head-text">Back to Home</span>
            </Link>
            </div>
            <div className="cat-head">
        
                <span className="head-text">My Orders</span>

            </div>
      <br />
      <br />
      <h1>My Orders</h1>
      {data.map((item) => (
        <div>
          -
          <HistoryProducts
            
            title={item.title}
            price={item.price}
            
            image={item.image}
          />
        </div>
      ))}
      
    </div>
  );
}

export default History;
