import { logRoles } from '@testing-library/react';
import React, { useState } from 'react';
import logos from "./logos.png";


function LoginForm ({ Login , error }) {
    const [details,setDetails] = useState ({email: "", password :""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
  }
    return (
        <form className='main' onSubmit={submitHandler}>

            <div className="form-inner">
            <div><h1>GDG <span>Ressources</span><x> Platform</x></h1></div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input className='email' type="email" name="Email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value = {details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input className="password" type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value = {details.password}/>
                </div>
                {(error != "") ? ( <div className='error'>{error}</div>):""}
                <input className='Login' type = "submit" value="Login" />
                <div><h8>Don't have an account ? <button>Sign up</button>  </h8></div>

            </div>
            <div className='logos'><img src={logos}></img></div>
        </form>
         
    )}
//<div className='logos'><img src={logos}></img></div>
export default LoginForm 
//<button>Sign up</button>
//<div className='logos'>
                //<img src={logos}></img>