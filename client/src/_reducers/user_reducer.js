import {
  LOGIN_USER,
  LOGOUT_USER,
  REGIST_USER,
  AUTH_USER,
} from "../_action/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
      break;
    case REGIST_USER:
      return { ...state, registSuccess: action.payload };
      break;
    case AUTH_USER:
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}
