import { Component } from "react";
import UserData from "./UserData";
import Suggestions from "./Suggestions";

class LeftSide extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="col-lg-3 col-md-4 pd-left-none no-pd">
        <div className="main-left-sidebar no-margin">
          <UserData user={user} />
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default LeftSide;