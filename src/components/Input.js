import React, { useRef } from "react";

function Input(props) {
  const text = useRef();
  const onChangeHandler = (e) => {
    props.onChange(text.current.value);
  };
  return <input type="text" onChange={onChangeHandler} ref={text}></input>;
}

export default Input;
