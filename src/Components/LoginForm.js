import axios from 'axios';
import React, { useState } from 'react';
import   {useCookies, Cookies}  from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import logos from "../logos.png";


function LoginForm ({ Login , error }) {
    const [details,setDetails] = useState({email: "", password :""});
    const [erreur , setErreur] = useState("");
    const [cookies , setCookies] = useCookies(["token"])
    const Navigate = useNavigate()

    const submitHandler = e => {
       
            e.preventDefault();
  }
  const onclickHandler = () => {
      console.log('ff')
    axios.post("http://localhost:4000/user/api/login", {
        email : details.email,
        password : details.password
    }).then( res => {
        if (res.data.error) {
            setDetails({email : "" , password : ""});
            setErreur(res.data.error)

        } else{
            console.log('ok')
            setCookies('token' , res.data.token)
            Navigate('/ressources/AI')
        }
        setTimeout(()=> {
            setErreur("");
        },3000)
    })
    
  }
 
    return (
        <form className='main' onSubmit={submitHandler}>

            <div className="form-inner">
            <div><h1><span>Ressources</span></h1></div>
                <div className="form-group">
                    <input className='email' placeholder='Email adress'
                     type="email" name="Email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value = {details.email}/>
                </div>
                <div className="form-group">
                    <input className="password" placeholder='Password'  type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value = {details.password}/>
                </div>
               <div className='error'>{erreur}</div>)
                <div className='form-group-login'>
                   <input className='Login' type="submit" onClick={()=> onclickHandler()} value="Login"  />
                </div>
                
                <div className='form-group-login'><h8>Don't have an account ? <button>Sign up</button>  </h8></div>

            </div>
            <div className='logos'><img src={logos}></img></div>
        </form>
         
    )}
export default LoginForm 
