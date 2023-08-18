const UserAccount = (props)=>{


  const handleLogout = (event)=> {
    // remove session
    event.preventDefault();
    window.sessionStorage.clear();
    window.location.reload();
  };

  const handleToggleUserInfo = (event)=> {
    // used jquery for now
    window.$(".user-account-settingss").slideToggle("fast");
    window.$("#message").not(window.$(this).next("#message")).slideUp();
    window.$("#notification").not(window.$(this).next("#notification")).slideUp();
  };



  return(
  <div className="user-account">
  <div className="user-info" onClick={handleToggleUserInfo}>
    <img
      src={"./images/" + props.user.username + ".png"}
      alt=""
    />
    <a href="./index.html#" title="">
      {props.user.fullname.substring(0, 4) + ".."}
    </a>
    <i className="la la-sort-down"></i>
  </div>
  <div className="user-account-settingss" id="users">
    <h3>Online Status</h3>
    <ul className="on-off-status">
      <li>
        <div className="fgt-sec">
          <input type="radio" name="cc" id="c5" />
          <label htmlFor="c5">
            <span></span>
          </label>
          <small>Online</small>
        </div>
      </li>
      <li>
        <div className="fgt-sec">
          <input type="radio" name="cc" id="c6" />
          <label htmlFor="c6">
            <span></span>
          </label>
          <small>Offline</small>
        </div>
      </li>
    </ul>
    <h3>Custom Status</h3>
    <div className="search_form">
      <form>
        <input type="text" name="search" />
        <button type="submit">Ok</button>
      </form>
    </div>
    <h3>Setting</h3>
    <ul className="us-links">
      <li>
        <a href="./profile-account-setting.html" title="">
          Account Setting
        </a>
      </li>
      <li>
        <a href="./index.html#" title="">
          Privacy
        </a>
      </li>
      <li>
        <a href="./index.html#" title="">
          Faqs
        </a>
      </li>
      <li>
        <a href="./index.html#" title="">
          Terms &amp; Conditions
        </a>
      </li>
    </ul>
    <h3 className="tc">
      <a href=".#" title="" onClick={handleLogout}>
        Logout
      </a>
    </h3>
  </div>
</div>
);
};
export default UserAccount;