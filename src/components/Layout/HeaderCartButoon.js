import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  //We use array distructuring to get items from the cartCtx. This we use as a dependency for our iseEffect to implement the class when an item is added
  const { items } = cartCtx;

  //Adding an effect so that button jumps when an item is added
  const bump = "bump";
  const btnClasss = `button ${btnIsHighlighted ? bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <button className={btnClasss} onClick={props.onClick}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
