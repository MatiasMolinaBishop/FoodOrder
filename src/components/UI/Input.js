import "./Input.css";

const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      {/* {...props.input} This esures that all the key value pairs on this object which we receive on props input are added as props input*/}
      <input id={props.id} {...props.input} />
    </div>
  );
};

export default Input;
