import { Component } from "react";


class Postbar extends Component{
  constructor() {
    super();
    this.handleSumitPost = this.handleSumitPost.bind(this);
  }
  handleShowPostForm() {
    document.querySelector(".post-popup.job_post").classList.add("active");
    document.querySelector(".wrapper").classList.add("overlay");
    return false;
  }


  handleHidePostForm() {
    document.querySelector(".post-popup.job_post").classList.remove("active");
    document.querySelector(".wrapper").classList.remove("overlay");
    return false;
  }

  handleSumitPost() {
    // login user info needed to link with post (to know who create post)
    const user_id = this.props.user.id;
    const post_by_username = this.props.user.username;
    const post_by_fullname = this.props.user.fullname;

    // select post form
    const formElem = document.getElementById("post-form");

    // gather inputs value
    const title = formElem.querySelector("#title").value;
    const skills = formElem.querySelector("#skills").value.split(",");
    const job_type = formElem.querySelector("#job_type").value;
    const pay_rate_per_hr_dollar = parseFloat(formElem.querySelector("#pay_rate_per_hr_dollar").value);
    const location = formElem.querySelector("#location").value;
    const description = formElem.querySelector("#description").value;

    // validate required fields
    if (!title || !skills || !job_type || !pay_rate_per_hr_dollar) {
      return;
    }
    // call Backend API to create post record
    fetch("http://localhost:5000/api/v1/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        post_by_fullname,
        post_by_username,
        title,
        skills,
        job_type,
        pay_rate_per_hr_dollar,
        location,
        description,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <>
        <div className="post-topbar">
          <div className="user-picy">
            <img src={"./images/" + this.props.user.username + ".jpeg"} alt="" />
          </div>
          <div className="post-st">
            <ul>
              <li>
                <a className="post-jb active" href="#" title="" onClick={this.handleShowPostForm}>
                  Post a Job
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="post-popup job_post">
          <div className="post-project">
            <h3>Post a job</h3>
            <div className="post-project-fields">
              <form id="post-form">
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" id="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" id="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-6">
                    <div className="price-br">
                      <input type="number" name="pay_rate_per_hr_dollar" id="pay_rate_per_hr_dollar" placeholder="Pay Rate" />
                      <i className="la la-dollar"></i>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inp-field">
                      <select id="job_type">
                        <option value="">Select Job Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="location" id="location" placeholder="Location" />
                  </div>
                  <div className="col-lg-12">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="button" value="post" onClick={this.handleSumitPost}>
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="#" title="" onClick={this.handleHidePostForm}>
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="#" title="" onClick={this.handleHidePostForm}>
              <i className="la la-times-circle-o"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Postbar;