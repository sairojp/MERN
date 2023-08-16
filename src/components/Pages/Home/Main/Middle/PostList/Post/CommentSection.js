import { Component } from "react";

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentType = this.handleCommentType.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleCommentType(event) {
    this.setState({ content: event.target.value });
  }

  handleDeleteComment(event) {
    event.preventDefault();
    const commentId = event.currentTarget.dataset.id;
    this.props.handleDeleteComment(commentId);
  }

  handleCommentSubmit(event) {
    event.preventDefault();
    const formElem = document.getElementById("comment-form");
    const content = formElem.querySelector("#comment-content").value;

    // empty content validation
    if (!content) {
      return;
    }

    this.props.handleCommentSubmit(content);
    this.setState({ content: "" });
  }

  render() {
    const { comments, user } = this.props;

    return (
      <div className="comment-section">
        <div className="comment-sec">
          <ul>
            {comments.map((comment, idx) => {
              const {
                id,
                content,
                comment_date,
                commented_by_username,
                commented_by_fullname,
              } = comment;
              return (
                <li key={idx}>
                  <div className="comment-list">
                    <div className="bg-img">
                      <img
                        src={"./images/" + commented_by_username + ".png"}
                        alt=""
                        style={{ width: "40px", maxWidth: "unset" }}
                      />
                    </div>
                    <div className="comment">
                      <h3>{commented_by_fullname}</h3>
                      <span>
                        <img src="./images/clock.png" alt="" /> 3 min ago
                      </span>
                      <p>{content}</p>
                      {/* <a href="./index.html#" title="">
                        <i className="fa fa-reply-all"></i>Reply
                      </a> */}
                    </div>
                    {commented_by_username === user.username && (
                      <div>
                        <a
                          href=".#"
                          title=""
                          data-id={id}
                          onClick={this.handleDeleteComment}
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="post-comment">
          <div className="cm_img">
            <img src={"./images/" + user.username + ".png"} alt="" />
          </div>
          <div className="comment_box">
            <form id="comment-form">
              <input
                type="text"
                id="comment-content"
                placeholder="Post a comment"
                value={this.state.content}
                onChange={this.handleCommentType}
              />
              <button
                type="button"
                style={{ marginLeft: "0px" }}
                onClick={this.handleCommentSubmit}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;