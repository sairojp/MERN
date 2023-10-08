import { Component } from "react";
import UserData from "./UserData";
import Suggestions from "./Suggestions";

const LeftSide = (props) => {
   
    const user = props.user;
    return (
      <div className="col-lg-3 col-md-4 pd-left-none no-pd">
        <div className="main-left-sidebar no-margin">
          <UserData user={user} />
          <Suggestions user={user} />
        </div>
      </div>
    );
  }


export default LeftSide;