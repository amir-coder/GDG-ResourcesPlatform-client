import "./List.css";
import JSONDATA from "../../Data_Courses.json";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from '../../Components/sidebar/Sidebar';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
const level = ["All","Beginner" , "intermediate","Advanced"]


function RessourcePage() {

  const [ListItem, setListItem] = useState([]);
  const {id} = useParams();
  const [ListItemFilter, setListItemFilter] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");
  const [cookies , setCookies] = useCookies(["token"])
  const navigate = useNavigate()

  useEffect(()=> {
    if (!cookies.token) navigate("/login")
    axios.post("http://localhost:4000/user/getInfo",{token : cookies.token? cookies.token : null}).then(res => {
    console.log(cookies.token , res.data)    
    if (res.data.status == "error") navigate('/login')
        
    })
},[])

  useEffect(async()=> {
    const res = await axios.get("https://gdg-api.herokuapp.com/ressources")
   const data = res.data
   console.log(data);
   if (data.length > 0) {
     setListItem(data.filter(val => val.categorie == id))
     setListItemFilter(data.filter(val => val.categorie == id))
   } 
   else {
    setListItem(JSONDATA.filter(val => val.categorie == id))
    setListItemFilter(JSONDATA.filter(val => val.categorie == id))
    console.log(id)
   } 
   
  },[id])

  const onFilter = (level) => {
    if (level =="All") setListItemFilter(ListItem)
    else {
      setListItemFilter(ListItem.filter((val) => {return val.level == level}));
    }
    setSearchTopic("")
  }


  return (
    <div className="App ListRessorces">
      <Sidebar />
      <input
        type="text"
        placeholder="Search for a topic"
        className="search"
        value={searchTopic}
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
            className={`Difficulty-filter ${Level} ${Level == filterLevel ? "active" :""}`}
            onClick={()=> {onFilter(level[i]);setFilterLevel(Level)} }
          >
            {Level}
          </div>
        );
      })}
    </div>
    {ListItemFilter.filter((val) => {
        if (searchTopic == "") {
          return val;
        } else if (
          val.title.toLowerCase().includes(searchTopic.toLowerCase())
        ) {
          return val;
        }
      }).map((val) => {
        return (
<>
          <div className="newcontainer">
            <div className="newCard">
                <div className="title">
                  <p><span>Title : </span> {val.title} </p>
                </div>
                <div className="category">
                  <p><span>Categorie : </span> {val.categorie} </p>
                </div>
                <div className="level">
                  <p><span>Level : </span> {val.level} </p>
                </div>
                <div className="type">
                  <p><span>Type : </span> {val.type_ressource} </p>
                </div>
            </div>
            <div className="button " onClick={()=>window.open(val.link)}>
                start
            </div>
            <div className="button but2" onClick={()=>navigate(`/detailRessource/${val._id}`)}>
              detail
            </div>
          </div>
          <br />
          </>
               );
              })}
    </div>
  );
}

export default RessourcePage;