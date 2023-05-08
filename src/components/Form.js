import React from "react";

import { useRef, useState, useEffect } from "react";
import classes from "./../styles/form.module.css";

function Form() {
  const [uname, setUName] = useState("");
  const [pass, setPassword] = useState("");
  const [nValid, setNValid] = useState(false);
  const [pValid, setPValid] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [chanceEdit, setChanceEdit] = useState(false);
  const user_name = useRef();
  const password = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    setChanceEdit(true);
    setUName(user_name.current.value);
    setPassword(password.current.value);
  };

  useEffect(() => {
    if (chanceEdit && (uname.trim() === "" || pass.trim() === "")) {
      console.log("invalid user name or password");
    }
    if (chanceEdit && (uname.length < 7 || pass.length < 7)) {
      console.log("User name and password length must be atleast 7");
    }
    if (uname.trim().length > 7 && pass.trim().length > 7) {
      setLoggedIn(true);
      console.log("LoggedIn");
    }
  }, [uname, pass, chanceEdit]);

  return (
    <div>
      {!loggedIn && (
        <form onSubmit={submitHandler}>
          <label htmlFor="user_name" value="UserName">
            UserName
          </label>
          <input
            type="text"
            id="user_name"
            placeholder="Username"
            ref={user_name}
            className={!chanceEdit && nValid ? "" : classes.invalid}
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={password}
            className={pValid ? "" : "invalid"}
          ></input>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      )}
      {loggedIn && <p> Logged In Successfully</p>}
    </div>
  );
}

export default Form;
