import React, { useContext } from "react";

import GitContext from "../../context/git/gitContext";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = () => {
  const gitContext = useContext(GitContext);

  const { users, loading } = gitContext;

  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
