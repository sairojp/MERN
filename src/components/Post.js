import { Component } from "react";
import CommentSection from "./CommentSection";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewed_by: props.post.viewed_by,
      liked_by: props.post.liked_by,
      comments: props.post.comments,
      showComment: false,
      viewPost: false,
    };
    this.handleViewPost = this.handleViewPost.bind(this);
    this.handleLikePost = this.handleLikePost.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleLikePost(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/v1/post/" + this.props.post.id + "/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: this.props.post.post_by_username }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          this.setState({ liked_by: data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleViewPost(event) {
    event.preventDefault();
    this.setState({ showPost: !this.state.showPost });
    if (!this.state.showPost) {
      fetch(
        "http://localhost:5000/api/v1/post/" + this.props.post.id + "/view",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: this.props.post.post_by_username }),
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (!data.error) {
            this.setState({ viewed_by: data, showPost: true });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  handleCommentClick(event) {
    event.preventDefault();
    this.setState({ showComment: !this.state.showComment });
  }

  handleCommentSubmit(content) {
    fetch(
      "http://localhost:5000/api/v1/post/" + this.props.post.id + "/comment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: {
            commented_by_username: this.props.user.username,
            commented_by_fullname: this.props.user.fullname,
            content: content,
          },
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          this.setState({ comments: data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleDeleteComment(commentId) {
    fetch(
      "http://localhost:5000/api/v1/post/" +
        this.props.post.id +
        "/comment/" +
        commentId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          this.setState({ comments: data });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { post, user } = this.props;
    const { viewed_by, liked_by, comments } = this.state;

    return (
      <div className="posty" style={{ marginBottom: "20px" }}>
        <div className="post-bar no-margin">
          <div className="post_topbar">
            <div className="usy-dt">
              <img src={"./images/" + post.post_by_username + ".png"} alt="" />
              <div className="usy-name">
                <h3>{post.post_by_fullname}</h3>
                <span>3 min ago</span>
              </div>
            </div>
            <div className="ed-opts">
              <a href="./index.html#" title="" className="ed-opts-open">
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
              {/* <li>
                <img src="./images/icon8.png" alt="" />
                <span>Epic Coder</span>
              </li> */}
              <li>
                <img src="./images/icon9.png" alt="" />
                <span>{post.location}</span>
              </li>
            </ul>
            <ul className="bk-links" style={{ display: "none" }}>
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
            <h3>{post.title}</h3>
            <ul className="job-dt">
              <li>
                <a href="./index.html#" title="">
                  {post.job_type}
                </a>
              </li>
              <li>
                <span>{"$" + post.pay_rate_per_hr_dollar + "/ hr"}</span>
              </li>
            </ul>
            <p>
              {this.state.showPost
                ? post.description
                : post.description.substring(1, 10) + "... "}
              {!this.state.showPost && (
                <a href="#" title="" onClick={this.handleViewPost}>
                  view more
                </a>
              )}
              {this.state.showPost && (
                <a href="#" title="" onClick={this.handleViewPost}>
                  {" show less"}
                </a>
              )}
            </p>
            <ul className="skill-tags">
              {post.skills.map((skl, idx2) => (
                <li key={idx2}>
                  <a href="./index.html#" title="">
                    {skl}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="job-status-bar">
            <ul className="like-com">
              <li>
                <a href="#" onClick={this.handleLikePost}>
                  <i className="fas fa-heart"></i> Like{" "}
                  {liked_by.length > 0 ? liked_by.length : ""}
                </a>
                <img
                  src="./images/liked-img.png"
                  alt=""
                  style={{ display: "none" }}
                />
                <span style={{ opacity: 0 }}>{liked_by.length}</span>
              </li>
              <li>
                <a href="#" className="com" onClick={this.handleCommentClick}>
                  <i className="fas fa-comment-alt"></i> Comment{" "}
                  {comments.length}
                </a>
              </li>
            </ul>
            <a href="#">
              <i className="fas fa-eye"></i>Views {viewed_by.length}
            </a>
          </div>
        </div>
        {this.state.showComment ? (
          <CommentSection
            comments={comments}
            user={user}
            handleCommentSubmit={this.handleCommentSubmit}
            handleDeleteComment={this.handleDeleteComment}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Post;