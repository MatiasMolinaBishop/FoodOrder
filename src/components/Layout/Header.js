// import { useContext } from "react";
import "./header.css";
import HeaderCartButton from "./HeaderCartButoon";
// import CartContext from "../../store/cart-context";

//import './Online.css'

const Header = (props) => {
  // const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
  //   return currentNumber + item.amount;
  // }, 0);
  return (
    <>
      <header className="header">
        <h1 className="color">React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          alt="cover food img"
        />
      </div>
    </>
  );
};

export default Header;
