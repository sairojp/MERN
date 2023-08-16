const Profile = (props) => {
  const { user } = props;

  return (
    <div className="user-profile">
      <div className="username-dt">
        <div className="usr-pic">
          <img src={"./images/" + user?.username + ".png"} alt="" />
        </div>
      </div>
      <div className="user-specs">
        <h3>{user?.fullname}</h3>
        <span>{user?.title}</span>
      </div>
    </div>
  );
};

export default Profile;