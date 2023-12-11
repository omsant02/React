import React from "react";
import UserContext from "./userContext";

const UserInfo = ({ children }) => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserInfo;
