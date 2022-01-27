import React from "react";
import "./App.css";
import Homepage from "./Homepage";

function App() {
  return (
    
    <div className='App'>
      <BrowserRouter >
        <Sidebar />
        <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/login" element={ <Login />}></Route>
           <Route path="/register" element={<Form />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/editProfile" element={<EditProfile />} />
           <Route path="/ressorces/:id" element={<RessourcePage />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
