import { useState, useEffect } from "react";
import { USERS_API } from "../../../../../../config";

const Suggestions = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch(USERS_API + "/" + props.user.id + "/suggestions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          setSuggestions(data);
        }
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="suggestions full-width">
      <div className="sd-title">
        <h3>Suggestions</h3>
        <i className="la la-ellipsis-v"></i>
      </div>
      <div className="suggestions-list">
        {suggestions.map((sug, idx) => (
          <div className="suggestion-usd" key={idx}>
            <img src={"./images/" + props.username + ".png"} alt="" />
            <div className="sgt-text">
              <h4>{sug.fullname}</h4>
              <span>{sug.tile}</span>
            </div>
            <span>
              <i className="la la-plus"></i>
            </span>
          </div>
        ))}
        <div className="view-more">
          <a href="/#" title="">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
