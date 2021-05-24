import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../_action/user_action";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get("api/test").then((response) => console.log(response));
  // }, []);

  const logoutHandler = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        alert("Success logout");
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
      <h2>시작페이지</h2>
      <br />
      <br />
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  );
}

export default withRouter(LandingPage);
