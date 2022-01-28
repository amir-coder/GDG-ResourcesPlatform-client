import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import avatar from "../../avatar.jpg";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./EditProfil.css";

const EditProfile = () => {
  const [cookies , setCookies] = useCookies(["token"])
  const naigate = useNavigate()
  const [values, setValues] = useState({
    fullName: "",
    username: "",
    email: "",
    discordId: "",
  });

  useEffect(()=> {
          axios.post("http://localhost:4000/user/getInfo",{token : cookies.token}).then(res => {
              console.log(res.data)
              setValues(res.data.values)
          })
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handlSubmit = () => {
    values.token = cookies.token
    axios.post("http://localhost:4000/user/api/user-profile", values).then( res => {
        console.log(res.data)
  })
  }
  return (
    <div className="contain">
      <Sidebar />
    <div className="vp">
        <div className="profile">
          <img
            src={avatar}
            alt="avatar"
            classname="picture"
            width="200px"
          ></img>
          <p>
            <i class="fas fa-pen"></i>
            <a href="#"> Edit profile picture </a>
          </p>
        </div>
        <div className="informations">
        <p className="username">
            <input type="text" name="username" value={values.username} onChange={handleChange} placeholder="Sami bcht"></input>
            <i class="fas fa-pen"></i>
          </p>
          <p className="fullName">
            <input type="text" name="fullName" value={values.fullName} onChange={handleChange} placeholder="Bouchbout Sami"></input>
            <i class="fas fa-pen"></i>
          </p>
          <p className="mail">
            <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="ks_bouchbout@esi.dz"></input>
            <i class="fas fa-pen"></i>
          </p>
          <p className="discordId">
            <input type="text" name="discordId" value={values.discordId} onChange={handleChange} placeholder="SAMI#6047"></input>
            <i class="fas fa-pen"></i>
          </p>
          <div type="button" onClick={()=> handlSubmit() } className="save-changes">
            Save changes
          </div>
        </div>
      </div>
      </div>
      
    
  );
};

export default EditProfile;
/*
<p className="username">
            <input type="text" placeholder="Sami bcht"></input>
            <i class="fas fa-pen"></i>
          </p>
          <p className="fullname">
            <input type="text" placeholder="Bouchbout Sami"></input>
            <i class="fas fa-pen"></i>
          </p>
          <p className="mail">
            <input type="email" placeholder="ks_bouchbout@esi.dz"></input>
            <i class="fas fa-pen"></i>
          </p>
          <p className="discord">
            <input type="text" placeholder="SAMI#6047"></input>
            <i class="fas fa-pen"></i>
          </p>
          <button type="button" className="save-changes">
            Save changes
          </button>
*/