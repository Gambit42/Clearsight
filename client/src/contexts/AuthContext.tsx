import { createContext } from "react";

type AuthContextProps = {
  user: any[];
  isLoggedIn: boolean;
  isLoading: boolean;
  token: string;
  dispatch: any;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    case "GET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        token: "",
        user: [],
      };
    default:
      return state;
  }
};
