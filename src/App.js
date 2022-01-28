import React from 'react';
import './App.css'
import Sidebar from './Components/sidebar/Sidebar';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import EditProfile from "./pages/EditProfile/EditProfile"
import Form from './pages/Register/Form';
import RessourcePage from './pages/Ressorces/List';
import Homepage from './pages/Home/Home';
import Detailressource from './pages/DetailRessorce/DetailedRessource';




function App() {
  return (
    <div className='App'>
      <BrowserRouter >

        <Routes>
           <Route path="/" element={<Homepage />}></Route>
           <Route path="/login" element={ <Login />}></Route>
           <Route path="/register" element={<Form />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/editProfile" element={<EditProfile />} />
           <Route path="/ressources/:id" element={<RessourcePage />} />
           <Route path='/detailRessource/:id' element={<Detailressource />} />
        </Routes>
      </BrowserRouter>
      </div>
   
  );
}
export default App;
