import "./List.css";
import JSONDATA from "../../Data_Courses.json";
import { useEffect, useState } from "react";
import axios from "axios";

function RessourcePage() {
  
  const [ListItem, setListItem] = useState(JSONDATA);
  const [searchTopic, setSearchTopic] = useState("");

  useEffect(async()=> {
    const res = await axios.get("http://localhost:4000/ressources/")
   const data = res.data
   setListItem(data);
  },[])

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


    <div className="buttons">
      {["All","Beginner" , "intermediate","Advanced"].map((Level, i) => {
        return (
          <div
            key={i}
            type="button"
            className="Difficulty-filter"
          >
            {Level}
          </div>
        );
      })}
    </div>

      {ListItem.filter((val) => {
        if (searchTopic == "") {
          return val;
        } else if (
          val.title.toLowerCase().includes(searchTopic.toLowerCase())
        ) {
          return val;
        }
      }).map((val,i) => {
        return (
          <div className="container" key={i}>
            <div className="card">
              <p className="title">
                <span className="sub-title">Title : </span>
                {val.title}
              </p>
              <p className="category">
                <span className="sub-category">Category : </span>
                {val.category}
              </p>
              <p className="level">
                <span className="sub-level">Level : </span>
                {val.level}
              </p>
              <p className="type">
                <span className="sub-type">Type : </span>
                {val.type}
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