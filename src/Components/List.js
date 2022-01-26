import "../App.css";
import JSONDATA from "../Data_Courses.json";
import { useState } from "react";
import Button from "./Button";

const allLevels = ["All", ...new Set(JSONDATA.map((item) => item.Level))];
console.log(allLevels);
function RessourcePage() {
  const [ListItem, setListItem] = useState(JSONDATA);
  const [searchTopic, setSearchTopic] = useState("");
  const [buttons, setButtons] = useState(allLevels);

  const filter = (button) => {
    const filteredData = JSONDATA.filter((val) => val.Category === button);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for a topic"
        className="search"
        onChange={(event) => {
          setSearchTopic(event.target.value);
        }}
      />

      {<Button button={buttons} filter={filter} />}

      {JSONDATA.filter((val) => {
        if (searchTopic == "") {
          return val;
        } else if (
          val.Title.toLowerCase().includes(searchTopic.toLowerCase())
        ) {
          return val;
        }
      }).map((val) => {
        return (
          <div className="container">
            <div className="card">
              <p className="title">
                <span className="sub-title">Title : </span>
                {val.Title}
              </p>
              <p className="category">
                <span className="sub-category">Category : </span>
                {val.Category}
              </p>
              <p className="level">
                <span className="sub-level">Level : </span>
                {val.Level}
              </p>
              <p className="type">
                <span className="sub-type">Type : </span>
                {val.Type}
              </p>
            </div>
            <button type="button" className="start-button">
              Start
            </button>
            <button type="button" className="Details-button">
              Detail
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RessourcePage;
