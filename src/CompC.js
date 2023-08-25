import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { UserContext } from "./UserContext";

const CompC = ({ info }) => {
  const framework = useContext(GlobalContext);
  const user = useContext(UserContext);
  <>
    return <div style={{ backgroundColor: "red" }}>CompC will be here</div>;
    <div>{info}</div>
    <div>{framework}</div>
    <div>Username: {user.name} </div>
    <div>User Info: {user.role} </div>
  </>;
};

export default CompC;
