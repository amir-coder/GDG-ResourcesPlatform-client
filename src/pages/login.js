
import React, { useState } from 'react';
import LoginForm from "./LoginForm"

function Login() {
  
    const exampleuser = {
        email: "codeit@gdg.com",
        password: "Brainy"
    }
    const[user, setUser] = useState ({email : "", password:""});
    const[error, setError] = useState ("");

    const Login = details => {
        console.log(details);

        if(details.email == exampleuser.email && details.password == exampleuser.password){
            console.log("logged in");
            setUser({
                email:details.email
            })
        } else {
            console.log("Details do not match");
            setError("Details do not match !");
        }
    }
    return (
     <div className="App">
         {(user.email != "") ? (
             <div className="welcome">
                 <h2>Welcome,</h2>
             </div>
         ) : (
             <LoginForm Login={Login} error={error} />
             
         )}
        
     </div>

    )}
     
     export default Login;
