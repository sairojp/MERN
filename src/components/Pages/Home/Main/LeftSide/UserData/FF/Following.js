import { Component } from "react";

class Following extends Component {
  render() {
    return (
      <li>
        <h4>Following</h4>
        <span>{this.props.user?.followings?.length}</span>
      </li>
    );
  }
}

export default Following;