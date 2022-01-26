import React, { useState } from 'react';
import "./Profile.css";
import avatar from "../assets/avatar.svg";
function Profile(){
    return(
        <div className='profilecontainer'>
            <ul className='profileBox'>
                <li className='avatarcontainer'>
                    <img className='avatar' src={avatar} alt=""/>
                </li>
                <li className='personal-info' ><span  className='sub-username'>UserName :</span> <output className='info'>Saradrb</output></li>
                <li className='personal-info' ><span className='sub-fullname'>Full Name :</span><output className='info'>Sara Dorbane</output></li>
                <li className='personal-info' ><span className='sub-email'>E-mail :</span><output className='info'>js_dorbane@esi.dz</output></li>
                <li className='personal-info' ><span className='sub-discord'>Discord ID :</span><output className='info'>#sara0504</output></li>
               
            </ul>
            <div className='infoSection'>
                <div className='infoBox'>
                    <li className='title-green'>Saved</li  >
                    <li className='info' >Node js advanced techniques</li  >
                    <li className='info' >Python for all</li >
                    <li className='info' >Introduction to Motion Design</li  >
                </div>
                <div className='infoBox'>
                    <li className='title-blue'>Contribution</li  >
                    <li className='info' >Python advanced techniques</li  >
                    <li className='info' >Java for all</li >
                    <li className='info' >Databases in AI</li  >
                    <li className='info' >Introduction to 3D Design</li  >
                    <li className='info' >AI basics</li >
                    <li className='info' >Introduction to Nodejs APIs</li>
                </div>

            </div>
        </div>
        
    );
}

export default Profile;