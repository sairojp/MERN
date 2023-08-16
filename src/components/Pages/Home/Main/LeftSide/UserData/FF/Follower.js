function Followers(props) {
  return (
    <li>
      <h4>Followers</h4>
      <span>{props.user?.followers?.length}</span>
    </li>
  );
}

export default Followers;