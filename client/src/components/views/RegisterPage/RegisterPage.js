import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registUser } from "../../../_action/user_action";
import { withRouter } from "react-router-dom";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onPwHandler = (e) => {
    setPw(e.target.value);
  };

  const onPw2Handler = (e) => {
    setPw2(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (pw !== pw2) {
      alert("No Same PassWord");
      return false;
    }

    let body = {
      email: email,
      name: name,
      pw: pw,
    };

    dispatch(registUser(body)).then((response) => {
      console.log(response.payload.success);
      if (response.payload.success) {
        alert("Congratulation");
        props.history.push("/login");
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
        <h1>Regist</h1>
        <br />
        <label>email</label>
        <input type="Email" value={email} onChange={onEmailHandler} />
        <label>name</label>
        <input type="text" value={name} onChange={onNameHandler} />
        <label>pw</label>
        <input type="password" value={pw} onChange={onPwHandler} />
        <label>pw</label>
        <input type="password" value={pw2} onChange={onPw2Handler} />
        <br />
        <button tyle="submit">Login</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
