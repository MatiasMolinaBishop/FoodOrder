import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  //toFixed(2) to make sure we always round to 2 decimal places
  const price = `$${props.price.toFixed(2)}`;
  return (
    <>
      <li className="meal">
        <div>
          <h3>{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
