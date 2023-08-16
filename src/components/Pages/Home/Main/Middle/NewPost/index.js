import AddPostBtn from "./AddPostBtn";
import PostForm from "./PostForm";

const NewPost = (props) => {
  return (
    <>
      <AddPostBtn user={props.user} />
      <PostForm user={props.user} />
    </>
  );
};

export default NewPost;