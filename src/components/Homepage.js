import { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <div className="container">
            <div className="header-data">
              <div className="logo">
                <a href="./index.html" title="">
                  <img src="./images/lec.png" alt="" />
                </a>
              </div>
              <div className="search-bar">
                <form>
                  <input type="text" name="search" placeholder="Search..." />
                  <button type="submit">
                    <i className="la la-search"></i>
                  </button>
                </form>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="./index.html" title="">
                      <span>
                        <img src="./images/icon1.png" alt="" />
                      </span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" className="not-box-openm">
                      <span>
                        <img src="./images/icon6.png" alt="" />
                      </span>
                      Messages
                    </a>
                    <div className="notification-box msg" id="message">
                      <div className="nt-title">
                        <h4>Setting</h4>
                        <a href="./index.html#" title="">
                          Clear all
                        </a>
                      </div>
                      <div className="nott-list">
                        <div className="notfication-details">
                          <div className="noty-user-img">
                            <img src="./images/ny-img1.png" alt="" />
                          </div>
                          <div className="notification-info">
                            <h3>
                              <a href="./messages.html" title="">
                                Jassica William
                              </a>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do.
                            </p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div className="notfication-details">
                          <div className="noty-user-img">
                            <img src="./images/ny-img2.png" alt="" />
                          </div>
                          <div className="notification-info">
                            <h3>
                              <a href="./messages.html" title="">
                                Jassica William
                              </a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div className="notfication-details">
                          <div className="noty-user-img">
                            <img src="./images/ny-img3.png" alt="" />
                          </div>
                          <div className="notification-info">
                            <h3>
                              <a href="./messages.html" title="">
                                Jassica William
                              </a>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div className="view-all-nots">
                          <a href="./messages.html" title="">
                            View All Messsages
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="#" title="" className="not-box-open">
                      <span>
                        <img src="./images/icon7.png" alt="" />
                      </span>
                      Notification
                    </a>
                    <div className="notification-box noti" id="notification">
                      <div className="nt-title">
                        <h4>Setting</h4>
                        <a href="#" title="">
                          Clear all
                        </a>
                      </div>
                      <div className="nott-list">
                        <div className="notfication-details">
                          <div className="noty-user-img">
                            <img src="./images/ny-img1.png" alt="" />
                          </div>
                          <div className="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>
                              Comment on your post.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div className="notfication-details">
                          <div className="noty-user-img">
                            <img src="./images/ny-img2.png" alt="" />
                          </div>
                          <div className="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>
                              Comment on your post.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div className="notfication-details">
                          <div className="noty-user-img">
                            <img src="./images/ny-img3.png" alt="" />
                          </div>
                          <div className="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>
                              Comment on your post.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div className="notfication-details">
                          <div className="noty-user-img">
                            <img src="./images/ny-img2.png" alt="" />
                          </div>
                          <div className="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>
                              Comment on your post.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div className="view-all-nots">
                          <a href="#" title="">
                            View All Notification
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="menu-btn">
                <a href="./index.html#" title="">
                  <i className="fa fa-bars"></i>
                </a>
              </div>
              <div className="user-account">
                <div className="user-info">
                  <img src="./images/user.jpeg" alt="" />
                  <a href="./index.html#" title="">
                    Saroj
                  </a>
                  <i className="la la-sort-down"></i>
                </div>
                <div className="user-account-settingss" id="users">
                  <h3>Online Status</h3>
                  <ul className="on-off-status">
                    <li>
                      <div className="fgt-sec">
                        <input type="radio" name="cc" id="c5" />
                        <label for="c5">
                          <span></span>
                        </label>
                        <small>Online</small>
                      </div>
                    </li>
                    <li>
                      <div className="fgt-sec">
                        <input type="radio" name="cc" id="c6" />
                        <label for="c6">
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
                    <a href="./sign-in.html" title="">
                      Logout
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                    <div className="main-left-sidebar no-margin">
                      <div className="user-data full-width">
                        <div className="user-profile">
                          <div className="username-dt">
                            <div className="usr-pic">
                              <img src="./images/saroj-pic.jpeg" alt="" />
                            </div>
                          </div>
                          <div className="user-specs">
                            <h3>Saroj Shakya</h3>
                            <span>Research Head</span>
                          </div>
                        </div>
                        <ul className="user-fw-status">
                          <li>
                            <h4>Following</h4>
                            <span>34</span>
                          </li>
                          <li>
                            <h4>Followers</h4>
                            <span>155</span>
                          </li>
                          <li>
                            <a href="./my-profile.html" title="">
                              View Profile
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="suggestions full-width"
                        style={{ display: "none" }}
                      >
                        <div className="sd-title">
                          <h3>Suggestions</h3>
                          <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="suggestions-list">
                          <div className="suggestion-usd">
                            <img src="./images/s1.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s2.png" alt="" />
                            <div className="sgt-text">
                              <h4>Saroj Shakya</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s3.png" alt="" />
                            <div className="sgt-text">
                              <h4>Poonam</h4>
                              <span>Wordpress Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s4.png" alt="" />
                            <div className="sgt-text">
                              <h4>Bill Gates</h4>
                              <span>C &amp; C++ Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s5.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s6.png" alt="" />
                            <div className="sgt-text">
                              <h4>Saroj Shakya</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="view-more">
                            <a href="./index.html#" title="">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tags-sec full-width"
                        style={{ display: "none" }}
                      >
                        <ul>
                          <li>
                            <a href="./index.html#" title="">
                              Help Center
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              About
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Community Guidelines
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Cookies Policy
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Career
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Language
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Copyright Policy
                            </a>
                          </li>
                        </ul>
                        <div className="cp-sec">
                          <img src="./images/lec-full.png" alt="" />
                          <p>
                            <img src="./images/cp.png" alt="" />
                            Copyright 2019
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8 no-pd">
                    <div className="main-ws-sec">
                      <div className="post-topbar">
                        <div className="user-picy">
                          <img src="./images/saroj-pic.jpeg" alt="" />
                        </div>
                        <div className="post-st">
                          <ul>
                            <li>
                              <a
                                className="post_project"
                                href="./index.html#"
                                title=""
                              >
                                Post a Project
                              </a>
                            </li>
                            <li>
                              <a
                                className="post-jb active"
                                href="./index.html#"
                                title=""
                              >
                                Post a Job
                              </a>
                            </li>
                            <li>
                              <a className="test active" href="#" title="">
                                Test
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="posts-section">
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="./images/saroj-pic.jpeg" alt="" />
                              <div className="usy-name">
                                <h3>Saroj Shakya</h3>
                                <span>3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a
                                href="./index.html#"
                                title=""
                                className="ed-opts-open"
                              >
                                <i className="la la-ellipsis-v"></i>
                              </a>
                              <ul className="ed-options">
                                <li>
                                  <a href="./index.html#" title="">
                                    Edit Post
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Unsaved
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Unbid
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Close
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Hide
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li>
                                <img src="./images/icon8.png" alt="" />
                                <span>Epic Coder</span>
                              </li>
                              <li>
                                <img src="./images/icon9.png" alt="" />
                                <span>India</span>
                              </li>
                            </ul>
                            <ul
                              className="bk-links"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a href="./index.html#" title="">
                                  <i className="la la-bookmark"></i>
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  <i className="la la-envelope"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Senior Wordpress Developer</h3>
                            <ul className="job-dt">
                              <li>
                                <a href="./index.html#" title="">
                                  Full Time
                                </a>
                              </li>
                              <li>
                                <span>$30 / hr</span>
                              </li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at. Etiam id magna sit
                              amet...
                              <a href="./index.html#" title="">
                                view more
                              </a>
                            </p>
                            <ul className="skill-tags">
                              <li>
                                <a href="./index.html#" title="">
                                  HTML
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  PHP
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  CSS
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  Javascript
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  Wordpress
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="./index.html#">
                                  <i className="fas fa-heart"></i> Like
                                </a>
                                <img src="./images/liked-img.png" alt="" />
                                <span>25</span>
                              </li>
                              <li>
                                <a href="./index.html#" className="com">
                                  <i className="fas fa-comment-alt"></i> Comment
                                  15
                                </a>
                              </li>
                            </ul>
                            <a href="./index.html#">
                              <i className="fas fa-eye"></i>Views 50
                            </a>
                          </div>
                        </div>
                        <div
                          className="top-profiles"
                          style={{ display: "none" }}
                        >
                          <div className="pf-hd">
                            <h3>Top Profiles</h3>
                            <i className="la la-ellipsis-v"></i>
                          </div>
                          <div className="profiles-slider slick-initialized slick-slider">
                            <span
                              className="slick-previous slick-arrow"
                              style={{ display: "inline" }}
                            ></span>
                            <div className="slick-list draggable">
                              <div
                                className="slick-track"
                                style={{
                                  opacity: "1",
                                  width: "2415px",
                                  transform: "translate3d(-805px, 0px, 0px)",
                                  transition: "transform 500ms ease 0s",
                                }}
                              >
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="-3"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="-2"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="-1"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide"
                                  data-slick-index="0"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide"
                                  data-slick-index="1"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="0"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="0"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="0"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="0"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="./index.html#" title="" tabindex="0">
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-current slick-active"
                                  data-slick-index="2"
                                  aria-hidden="false"
                                  style={{ width: "153px" }}
                                  tabindex="0"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="0"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="0"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="0"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="./index.html#" title="" tabindex="0">
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-active"
                                  data-slick-index="3"
                                  aria-hidden="false"
                                  style={{ width: "153px" }}
                                  tabindex="0"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="0"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="0"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="0"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="./index.html#" title="" tabindex="0">
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-active"
                                  data-slick-index="4"
                                  aria-hidden="false"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide"
                                  data-slick-index="5"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="6"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="7"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="8"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="9"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user1.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="10"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user2.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                                <div
                                  className="user-profy slick-slide slick-cloned"
                                  data-slick-index="11"
                                  aria-hidden="true"
                                  style={{ width: "153px" }}
                                  tabindex="-1"
                                >
                                  <img src="./images/user3.png" alt="" />
                                  <h3>Saroj Shakya</h3>
                                  <span>Graphic Designer</span>
                                  <ul>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="followw"
                                        tabindex="-1"
                                      >
                                        Follow
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="envlp"
                                        tabindex="-1"
                                      >
                                        <img
                                          src="./images/envelop.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="hire"
                                        tabindex="-1"
                                      >
                                        hire
                                      </a>
                                    </li>
                                  </ul>
                                  <a
                                    href="./index.html#"
                                    title=""
                                    tabindex="-1"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>

                            <span
                              className="slick-nexti slick-arrow"
                              style={{ display: "inline" }}
                            ></span>
                          </div>
                        </div>
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="./images/saroj-pic.jpeg" alt="" />
                              <div className="usy-name">
                                <h3>Saroj Shakya</h3>
                                <span>3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a
                                href="./index.html#"
                                title=""
                                className="ed-opts-open"
                              >
                                <i className="la la-ellipsis-v"></i>
                              </a>
                              <ul className="ed-options">
                                <li>
                                  <a href="./index.html#" title="">
                                    Edit Post
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Unsaved
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Unbid
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Close
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Hide
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li>
                                <img src="./images/icon8.png" alt="" />
                                <span>Epic Coder</span>
                              </li>
                              <li>
                                <img src="./images/icon9.png" alt="" />
                                <span>India</span>
                              </li>
                            </ul>
                            <ul
                              className="bk-links"
                              style={{ display: "none" }}
                            >
                              <li>
                                <a href="./index.html#" title="">
                                  <i className="la la-bookmark"></i>
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  <i className="la la-envelope"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Senior Wordpress Developer</h3>
                            <ul className="job-dt">
                              <li>
                                <a href="./index.html#" title="">
                                  Full Time
                                </a>
                              </li>
                              <li>
                                <span>$30 / hr</span>
                              </li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at. Etiam id magna sit
                              amet...
                              <a href="./index.html#" title="">
                                view more
                              </a>
                            </p>
                            <ul className="skill-tags">
                              <li>
                                <a href="./index.html#" title="">
                                  HTML
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  PHP
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  CSS
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  Javascript
                                </a>
                              </li>
                              <li>
                                <a href="./index.html#" title="">
                                  Wordpress
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="./index.html#">
                                  <i className="fas fa-heart"></i> Like
                                </a>
                                <img src="./images/liked-img.png" alt="" />
                                <span>25</span>
                              </li>
                              <li>
                                <a href="./index.html#" className="com">
                                  <i className="fas fa-comment-alt"></i> Comment
                                  15
                                </a>
                              </li>
                            </ul>
                            <a href="./index.html#">
                              <i className="fas fa-eye"></i>Views 50
                            </a>
                          </div>
                        </div>
                        <div className="posty">
                          <div className="post-bar no-margin">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                <img src="./images/saroj-pic.jpeg" alt="" />
                                <div className="usy-name">
                                  <h3>Saroj Shakya</h3>
                                  <span>3 min ago</span>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <a
                                  href="./index.html#"
                                  title=""
                                  className="ed-opts-open"
                                >
                                  <i className="la la-ellipsis-v"></i>
                                </a>
                                <ul className="ed-options">
                                  <li>
                                    <a href="./index.html#" title="">
                                      Edit Post
                                    </a>
                                  </li>
                                  <li>
                                    <a href="./index.html#" title="">
                                      Unsaved
                                    </a>
                                  </li>
                                  <li>
                                    <a href="./index.html#" title="">
                                      Unbid
                                    </a>
                                  </li>
                                  <li>
                                    <a href="./index.html#" title="">
                                      Close
                                    </a>
                                  </li>
                                  <li>
                                    <a href="./index.html#" title="">
                                      Hide
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="epi-sec">
                              <ul className="descp">
                                <li>
                                  <img src="./images/icon8.png" alt="" />
                                  <span>Epic Coder</span>
                                </li>
                                <li>
                                  <img src="./images/icon9.png" alt="" />
                                  <span>India</span>
                                </li>
                              </ul>
                              <ul
                                className="bk-links"
                                style={{ display: "none" }}
                              >
                                <li>
                                  <a href="./index.html#" title="">
                                    <i className="la la-bookmark"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    <i className="la la-envelope"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="job_descp">
                              <h3>Senior Wordpress Developer</h3>
                              <ul className="job-dt">
                                <li>
                                  <a href="./index.html#" title="">
                                    Full Time
                                  </a>
                                </li>
                                <li>
                                  <span>$30 / hr</span>
                                </li>
                              </ul>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquam luctus hendrerit metus,
                                ut ullamcorper quam finibus at. Etiam id magna
                                sit amet...
                                <a href="./index.html#" title="">
                                  view more
                                </a>
                              </p>
                              <ul className="skill-tags">
                                <li>
                                  <a href="./index.html#" title="">
                                    HTML
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    PHP
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    CSS
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Javascript
                                  </a>
                                </li>
                                <li>
                                  <a href="./index.html#" title="">
                                    Wordpress
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="job-status-bar">
                              <ul className="like-com">
                                <li>
                                  <a href="./index.html#">
                                    <i className="fas fa-heart"></i> Like
                                  </a>
                                  <img src="./images/liked-img.png" alt="" />
                                  <span>25</span>
                                </li>
                                <li>
                                  <a href="./index.html#" className="com">
                                    <i className="fas fa-comment-alt"></i>{" "}
                                    Comment 15
                                  </a>
                                </li>
                              </ul>
                              <a href="./index.html#">
                                <i className="fas fa-eye"></i>Views 50
                              </a>
                            </div>
                          </div>
                          <div
                            className="comment-section"
                            style={{ display: "none" }}
                          >
                            <a href="./index.html#" className="plus-ic">
                              <i className="la la-plus"></i>
                            </a>
                            <div className="comment-sec">
                              <ul>
                                <li>
                                  <div className="comment-list">
                                    <div className="bg-img">
                                      <img src="./images/bg-img1.png" alt="" />
                                    </div>
                                    <div className="comment">
                                      <h3>Saroj Shakya</h3>
                                      <span>
                                        <img src="./images/clock.png" alt="" />{" "}
                                        3 min ago
                                      </span>
                                      <p>Lorem ipsum dolor sit amet,</p>
                                      <a
                                        href="./index.html#"
                                        title=""
                                        className="active"
                                      >
                                        <i className="fa fa-reply-all"></i>Reply
                                      </a>
                                    </div>
                                  </div>
                                  <ul>
                                    <li>
                                      <div className="comment-list">
                                        <div className="bg-img">
                                          <img
                                            src="./images/bg-img2.png"
                                            alt=""
                                          />
                                        </div>
                                        <div className="comment">
                                          <h3>Saroj Shakya</h3>
                                          <span>
                                            <img
                                              src="./images/clock.png"
                                              alt=""
                                            />
                                            3 min ago
                                          </span>
                                          <p>Hi John</p>
                                          <a href="./index.html#" title="">
                                            <i className="fa fa-reply-all"></i>
                                            Reply
                                          </a>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <div className="comment-list">
                                    <div className="bg-img">
                                      <img src="./images/bg-img3.png" alt="" />
                                    </div>
                                    <div className="comment">
                                      <h3>Saroj Shakya</h3>
                                      <span>
                                        <img src="./images/clock.png" alt="" />{" "}
                                        3 min ago
                                      </span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam luctus
                                        hendrerit metus, ut ullamcorper quam
                                        finibus at.
                                      </p>
                                      <a href="./index.html#" title="">
                                        <i className="fa fa-reply-all"></i>Reply
                                      </a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="post-comment">
                              <div className="cm_img">
                                <img src="./images/bg-img4.png" alt="" />
                              </div>
                              <div className="comment_box">
                                <form>
                                  <input
                                    type="text"
                                    placeholder="Post a comment"
                                  />
                                  <button type="submit">Send</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="process-comm">
                          <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 pd-right-none no-pd">
                    <div className="right-sidebar">
                      <div
                        className="widget widget-about"
                        style={{ display: "none" }}
                      >
                        <img src="./images/lec.png" alt="" />
                        <h3>Track Time on LEC</h3>
                        <span>Pay only for the Hours worked</span>
                        <div className="sign_link">
                          <h3>
                            <a href="./sign-in.html" title="">
                              Sign up
                            </a>
                          </h3>
                          <a href="./index.html#" title="">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div
                        className="widget widget-jobs"
                        style={{ display: "none" }}
                      >
                        <div className="sd-title">
                          <h3>Top Jobs</h3>
                          <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior PHP Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Developer Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tags-sec full-width">
                        <ul>
                          <li>
                            <a href="./help-center.html" title="">
                              Help Center
                            </a>
                          </li>
                          <li>
                            <a href="./about.html#" title="">
                              About
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Community Guidelines
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Cookies Policy
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Career
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Language
                            </a>
                          </li>
                          <li>
                            <a href="./index.html#" title="">
                              Copyright Policy
                            </a>
                          </li>
                        </ul>
                        <div className="cp-sec">
                          <img src="./images/lec-full.png" alt="" />
                          <p>
                            <img src="./images/cp.png" alt="" />
                            Copyright 2019
                          </p>
                        </div>
                      </div>
                      <div
                        className="widget widget-jobs"
                        style={{ display: "none" }}
                      >
                        <div className="sd-title">
                          <h3>Most Viewed This Week</h3>
                          <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit..
                              </p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="widget suggestions full-width"
                        style={{ display: "none" }}
                      >
                        <div className="sd-title">
                          <h3>Most Viewed People</h3>
                          <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="suggestions-list">
                          <div className="suggestion-usd">
                            <img src="./images/s1.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s2.png" alt="" />
                            <div className="sgt-text">
                              <h4>Saroj Shakya</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s3.png" alt="" />
                            <div className="sgt-text">
                              <h4>Poonam</h4>
                              <span>Wordpress Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s4.png" alt="" />
                            <div className="sgt-text">
                              <h4>Bill Gates</h4>
                              <span>C &amp; C++ Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s5.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="./images/s6.png" alt="" />
                            <div className="sgt-text">
                              <h4>Saroj Shakya</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span>
                              <i className="la la-plus"></i>
                            </span>
                          </div>
                          <div className="view-more">
                            <a href="./index.html#" title="">
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="post-popup pst-pj">
          <div className="post-project">
            <h3>Post a project</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-12">
                    <div className="price-sec">
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar"></i>
                      </div>
                      <span>To</span>
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="submit" value="post">
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="./index.html#" title="">
              <i className="la la-times-circle-o"></i>
            </a>
          </div>
        </div>
        <div className="post-popup job_post">
          <div className="post-project">
            <h3>Post a job</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-6">
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar"></i>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inp-field">
                      <select>
                        <option>Full Time</option>
                        <option>Half time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        <button className="active" type="submit" value="post">
                          Post
                        </button>
                      </li>
                      <li>
                        <a href="./index.html#" title="">
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <a href="./index.html#" title="">
              <i className="la la-times-circle-o"></i>
            </a>
          </div>
        </div>
        <div
          className="chatbox-list"
          style={{ right: "270px", display: "none" }}
        >
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img1.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Saroj Shakya <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_1"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabindex="0"
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: "0", left: "0" }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_1_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_1_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg">
              <a href="./index.html#" title="">
                <img src="./images/usr-img2.png" alt="" />
              </a>
            </div>
            <div className="conversation-box">
              <div className="con-title mg-3">
                <div className="chat-user-info">
                  <img src="./images/us-img1.png" alt="" />
                  <h3>
                    Saroj Shakya <span className="status-info"></span>
                  </h3>
                </div>
                <div className="st-icons">
                  <a href="./index.html#" title="">
                    <i className="la la-cog"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-minus-square"></i>
                  </a>
                  <a href="./index.html#" title="" className="close-chat">
                    <i className="la la-close"></i>
                  </a>
                </div>
              </div>
              <div
                className="chat-hist mCustomScrollbar _mCS_2"
                data-mcs-theme="dark"
              >
                <div
                  id="mCSB_2"
                  className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "none" }}
                  tabindex="0"
                >
                  <div
                    id="mCSB_2_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: "0", left: "0" }}
                    dir="ltr"
                  >
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                    <div className="date-nd">
                      <span>Sunday, August 24</span>
                    </div>
                    <div className="chat-msg st2">
                      <p>Cras ultricies ligula.</p>
                      <span>5 minutes ago</span>
                    </div>
                    <div className="chat-msg">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor.
                      </p>
                      <span>Sat, Aug 23, 1:10 PM</span>
                    </div>
                  </div>
                  <div
                    id="mCSB_2_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark mCSB_scrollTools_vertical"
                    style={{ display: "block" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_2_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          display: "block",
                          height: "198px",
                          maxHeight: "270px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="typing-msg">
                <form>
                  <textarea placeholder="Type a message here"></textarea>
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
                <ul className="ft-options">
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-smile-o"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="la la-camera"></i>
                    </a>
                  </li>
                  <li>
                    <a href="./index.html#" title="">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chatbox">
            <div className="chat-mg bx">
              <a href="./index.html#" title="">
                <img src="./images/chat.png" alt="" />
              </a>
              <span>2</span>
            </div>
            <div className="conversation-box">
              <div className="con-title">
                <h3>Messages</h3>
                <a href="./index.html#" title="" className="close-chat">
                  <i className="la la-minus-square"></i>
                </a>
              </div>
              <div className="chat-list">
                <div className="conv-list active">
                  <div className="usrr-pic">
                    <img src="./images/usy1.png" alt="" />
                    <span className="active-status activee"></span>
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>1:55 PM</span>
                  </div>
                  <span className="msg-numbers">2</span>
                </div>
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy2.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>11:39 PM</span>
                  </div>
                </div>
                {/* <ConvoList></ConvoList> */}
                <div className="conv-list">
                  <div className="usrr-pic">
                    <img src="./images/usy3.png" alt="" />
                  </div>
                  <div className="usy-info">
                    <h3>Saroj Shakya</h3>
                    <span>
                      Lorem ipsum dolor <img src="./images/smley.png" alt="" />
                    </span>
                  </div>
                  <div className="ct-time">
                    <span>0.28 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
