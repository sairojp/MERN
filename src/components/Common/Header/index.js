
import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import UserAccount from "./UserAccount";


const Header =(props)=> {
    return (
      <header>
        <div className="container">
          <div className="header-data">
            <Logo/>
            <SearchBar handleSearch={props.handleSearch}/>
            <Nav/>
            <MenuBtn/>
            <UserAccount user={props.user}/>
          </div>
        </div>
      </header>
    );
  };


export default Header;