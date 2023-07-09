import { Component } from "react";

class Postbar extends Component{
  render(){
    return <div className="post-topbar">
    <div className="user-picy">
      <img src="./images/sairoj-pic.jpg" alt="" />
    </div>
    <div className="post-st">
      <ul>
        <li>
          <a
            className="post-jb active"
            href="./index.html#"
            title=""
            >Post a Job</a
          >
        </li>
      </ul>
    </div>
  </div>
  }
}
export default Postbar;