import Profile from "./Profile";
import FF from "./FF";

const UserData = (props) => {
  return (
    <div className="user-data full-width">
      <Profile user={props.user} />
      <FF user={props.user} />
    </div>
  );
};

export default UserData;