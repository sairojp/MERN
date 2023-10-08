

const AddPostBtn = (props) => {
  const handleShowPostForm =() => {
    document.querySelector(".post-popup.job_post").classList.add("active");
    document.querySelector(".wrapper").classList.add("overlay");
    return false;
  };

  
    return (
      <div className="post-topbar">
        <div className="user-picy">
          <img src={"./images/" + props.user.username + ".png"} alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <a
                className="post-jb active"
                href="/#"
                title=""
                onClick={handleShowPostForm}
              >
                Post a Job
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default AddPostBtn;