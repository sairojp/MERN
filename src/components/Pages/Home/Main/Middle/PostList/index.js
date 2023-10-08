import { useEffect, useState } from "react";
import Post from "./Post";
import { POSTS_API } from "../../../../../../config";

const PostList =(props) => {
  const [posts,setPosts] = useState ([]);

  useEffect(()=>{
    fetch(POSTS_API)
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data );
      })
      .catch((err) => {
        console.error(err);
      });
  });
  
  let filteredPosts = [...posts];
  if (props.searchKey) {
    filteredPosts = posts.filter((post) => {
      if (post.title.toLowerCase().includes(props.searchKey.toLowerCase()) || post.description.toLowerCase().includes(props.searchKey.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }

 
    return (
      <div className="posts-section">
        {filteredPosts.map((post, idx) => (
          <Post post={post} user={props.user} key={idx} />
        ))}
      </div>
    );
  }


export default PostList;