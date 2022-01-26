import React from "react";
import avatar from "../avatar.jpg";
import "../App.css";

const EditProfile = () => {
  return (
    <div className="vp">
      <div className="container">
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
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
