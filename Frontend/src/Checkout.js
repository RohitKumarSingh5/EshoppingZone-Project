import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import { Link} from "react-router-dom";
import './Item.css';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        

        <div className="checkout__title">
                    <div className="cat-head">
			<span className="head-text">Items in your Cart</span>
            <br/>
            
		</div>
        <div className="cat-head">
        <Link to="/">
                <span className="head-text">Back to Home</span>
            </Link>
            </div>
          

          {basket.map((item) => (
            <CheckoutProduct
              productsName={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
