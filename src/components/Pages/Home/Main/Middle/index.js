import { Component } from "react";
import NewPost from "./NewPost";
import PostList from "./PostList";

class Middle extends Component {
  render() {
    const {user} = this.props
    return (
      <div className="col-lg-6 col-md-8 no-pd">
        <div className="main-ws-sec">
          <NewPost user={user} />
          <PostList user={user} />
        </div>
      </div>
    );
  }
}

export default Middle;