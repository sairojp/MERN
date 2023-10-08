
import Follower from "./Follower";
import Following from "./Following";

const FF = (props)=> {
    return (
      <ul className="user-fw-status">
        <Follower user={props.user} />
        <Following user={props.user} />
        <li>
          <a href="./my-profile.html" title="">
            View Profile
          </a>
        </li>
      </ul>
    );
  };


export default FF;