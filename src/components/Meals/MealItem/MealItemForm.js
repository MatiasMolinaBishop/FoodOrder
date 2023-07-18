import { useRef, useState } from "react";

import "./MealItemForm.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [AmountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    //Every ref has access to a value. This value from input always returns a string even if the type is number
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length < 1 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      console.log(`IS IT WORKING? ${AmountIsValid}`);
      return; //We have this validation check. If any of this cases is true we return the fucntion without doing anything
      //We also want to output a message to the user (err)
    }
    //We want forward the data passed by the user to a parent component that takes care of adding the new itmes to the users cart
    //We do this beacuse the cart item needs more data than just the entered amount
    console.log(`IS IT WORKING? ${AmountIsValid}`);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <Input
          // This is a cutom component so refs does not work like this. For it to work we need to warp the custom component with React.forwardRef()
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!AmountIsValid && <p>Please enter value amoutn 1-5</p>}
      </form>
    </>
  );
};

export default MealItemForm;
