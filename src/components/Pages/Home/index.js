import { useState } from "react";
import Header from "../../Common/Header";
import ChatBox from "./Chatbox";
import Main from "./Main";

const Home = (props) => {
  const [isSearched, setIsSearched] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const handleSearch = () => {
    const searchKey = document.getElementById("searchkey").value;
    setIsSearched(!isSearched);
    setSearchKey(searchKey);
  };
 
    const user = props.user;
    // const user = { ...this.props.user };
    // const { user } = this.props;
    if (!Object.keys(user).length) {
      return <div></div>;
    }
    return (
      <div className="wrapper">
        <Header user={user} handleSearch={handleSearch} />
      <Main user={user} searchKey={searchKey} />

        <ChatBox />
      </div>
    ); 
};

export default Home;