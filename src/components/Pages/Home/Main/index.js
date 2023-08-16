import Footer from "../../../Footer";
import Middle from "./Middle";
import LeftSide from "./LeftSide";

const Main = (props) => {
  return (
    <main>
      <div className="main-section">
        <div className="container">
          <div className="main-section-data">
            <div className="row">
              <LeftSide user={props.user} />
              <Middle user={props.user} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;