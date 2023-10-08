
import NewPost from "./NewPost";
import PostList from "./PostList";


const Middle = (props) => {
  const { user } = props;
  return (
    <div className="col-lg-6 col-md-8 no-pd">
      <div className="main-ws-sec">
        <NewPost user={user} />
        <PostList user={user} searchKey={props.searchKey} />
      </div>
    </div>
  );
};

export default Middle;