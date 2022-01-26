import { logRoles } from '@testing-library/react';
import React, { useState } from 'react';
import logos from "../logos.png";


function LoginForm ({ Login , error }) {
    const [details,setDetails] = useState ({email: "", password :""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
  }
    return (
        <form className='main' onSubmit={submitHandler}>

            <div className="form-inner">
            <div><h1><span>Ressources</span></h1></div>
                <div className="form-group">
                    <input className='email' placeholder='Email adress' type="email" name="Email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value = {details.email}/>
                </div>
                <div className="form-group">
                    <input className="password" placeholder='Password'  type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value = {details.password}/>
                </div>
                {(error != "") ? ( <div className='error'>{error}</div>):""}
                <div className='form-group-login'>
                   <input className='Login' type = "submit" value="Login" />
                </div>
                
                <div className='form-group-login'><h8>Don't have an account ? <button>Sign up</button>  </h8></div>

            </div>
            <div className='logos'><img src={logos}></img></div>
        </form>
         
    )}
export default LoginForm 
