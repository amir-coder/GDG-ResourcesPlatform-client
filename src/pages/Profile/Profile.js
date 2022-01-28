import React, { useEffect, useState } from 'react';
import "./Profile.css";
import avatar from "../../assets/avatar.svg";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
function Profile(){
    const [cookies , setCookies] = useCookies(["token"])
    const naigate = useNavigate()
    const [values, setValues] = useState({
        username : "",
        email : "" ,
        fullName : "",
        discordId : ""
    })

    useEffect(()=> {
            axios.post("http://localhost:4000/user/getInfo",{token : cookies.token}).then(res => {
                console.log(res.data)
                setValues(res.data.values)
            })
    },[])


    return(
        <div className='profilecontainer'>
            <Sidebar />
            <ul className='profileBox'>
                <li className='avatarcontainer'>
                    <img className='avatar' src={avatar} alt=""/>
                </li>
                <li className='personal-info' ><span  className='sub-username'>UserName :</span> <output className='info'>{values.username}</output></li>
                <li className='personal-info' ><span className='sub-fullname'>Full Name :</span><output className='info'>{values.fullName}</output></li>
                <li className='personal-info' ><span className='sub-email'>E-mail :</span><output className='info'>{values.email}</output></li>
                <li className='personal-info' ><span className='sub-discord'>Discord ID :</span><output className='info'>{values.discordId}</output></li>
               
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