import { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user,
        setUser,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
