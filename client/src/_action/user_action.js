import axios from "axios";
import { LOGIN_USER, LOGOUT_USER, REGIST_USER, AUTH_USER } from "./types";

export function loginUser(dateToSubmit) {
  const request = axios
    .post("/api/users/login", dateToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function logoutUser(dateToSubmit) {
  const request = axios
    .get("/api/users/logout")
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function registUser(dateToSubmit) {
  const request = axios
    .post("/api/users/register", dateToSubmit)
    .then((response) => response.data);

  return {
    type: REGIST_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
