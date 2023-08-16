import { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const that = this;
    fetch("http://localhost:5000/api/v1/posts")
      .then((resp) => resp.json())
      .then((data) => {
        that.setState({ posts: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="posts-section">
        {this.state.posts.map((post, idx) => (
          <Post post={post} user={this.props.user} key={idx} />
        ))}
      </div>
    );
  }
}

export default PostList;