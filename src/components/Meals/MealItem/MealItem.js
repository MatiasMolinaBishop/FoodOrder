import { useContext } from "react";

import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  //toFixed(2) to make sure we always round to 2 decimal places
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    //Here we need to reach our context to update it and add the item to it. This way it is available throughout the entire application
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <>
      <li className="meal">
        <div>
          <h3>{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
