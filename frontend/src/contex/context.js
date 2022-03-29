import { createContext, useReducer } from "react";
import Reducer from "./reducer";
import jwt_decode from "jwt-decode";

const accessToken = localStorage.getItem("access_token");
const INITIAL_STATE = {
  posts: [],
  user: accessToken ? jwt_decode(accessToken) : null,
  isFetching: false,
  error: false,
};

// layer the global data
export const Context = createContext(INITIAL_STATE);
console.log(INITIAL_STATE.user);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <Context.Provider
      value={{
        posts: state.posts,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
