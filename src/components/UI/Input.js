import "./Input.css";
import React from "react";

// React.forwardRef is used to set ref on a custom component. The ref set on the form component and passed here via props
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      {/* {...props.input} This esures that all the key value pairs on this object which we receive on props input are added as props input*/}
      <input ref={ref} {...props.input} />
      {/* We set the ref prop on the input element to my ref parameter */}
    </div>
  );
});

export default Input;
