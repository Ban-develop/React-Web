import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_action/user_action";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPwHandler = (e) => {
    setPw(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      pw: pw,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginRes) {
        alert("Success");
        props.history.push("/");
      } else {
        alert("Error!");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <h1>Login</h1>
        <br />
        <label>email</label>
        <input type="Email" value={email} onChange={onEmailHandler} />
        <label>pw</label>
        <input type="password" value={pw} onChange={onPwHandler} />
        <br />
        <button tyle="submit">Login</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
