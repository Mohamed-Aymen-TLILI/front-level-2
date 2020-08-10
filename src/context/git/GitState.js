import React, { useReducer } from "react";
import axios from "axios";
import GitContext from "./gitContext";
import GitReducer from "./gitReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
} from "../types";

const GitState = (props) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitReducer, initialState);

  //Search Users
  const searchUsers = async (user) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //Clear Users
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS,
    });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GitContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {props.children}
    </GitContext.Provider>
  );
};

export default GitState;
