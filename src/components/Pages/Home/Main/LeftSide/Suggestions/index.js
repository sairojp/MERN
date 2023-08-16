import { Component } from "react";

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions full-width">
        <div className="sd-title">
          <h3>Suggestions</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="suggestions-list">
          <div className="suggestion-usd">
            <img src="./images/s1.png" alt="" />
            <div className="sgt-text">
              <h4>Jessica William</h4>
              <span>Graphic Designer</span>
            </div>
            <span>
              <i className="la la-plus"></i>
            </span>
          </div>
          <div className="suggestion-usd">
            <img src="./images/s2.png" alt="" />
            <div className="sgt-text">
              <h4>Saroj Shakya</h4>
              <span>PHP Developer</span>
            </div>
            <span>
              <i className="la la-plus"></i>
            </span>
          </div>
          <div className="suggestion-usd">
            <img src="./images/s3.png" alt="" />
            <div className="sgt-text">
              <h4>Poonam</h4>
              <span>Wordpress Developer</span>
            </div>
            <span>
              <i className="la la-plus"></i>
            </span>
          </div>
          <div className="suggestion-usd">
            <img src="./images/s4.png" alt="" />
            <div className="sgt-text">
              <h4>Bill Gates</h4>
              <span>C &amp; C++ Developer</span>
            </div>
            <span>
              <i className="la la-plus"></i>
            </span>
          </div>
          <div className="suggestion-usd">
            <img src="./images/s5.png" alt="" />
            <div className="sgt-text">
              <h4>Jessica William</h4>
              <span>Graphic Designer</span>
            </div>
            <span>
              <i className="la la-plus"></i>
            </span>
          </div>
          <div className="suggestion-usd">
            <img src="./images/s6.png" alt="" />
            <div className="sgt-text">
              <h4>Saroj Shakya</h4>
              <span>PHP Developer</span>
            </div>
            <span>
              <i className="la la-plus"></i>
            </span>
          </div>
          <div className="view-more">
            <a href="./index.html#" title="">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;