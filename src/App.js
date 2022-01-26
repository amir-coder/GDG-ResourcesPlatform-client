import React from 'react';
import './App.css'
import Sidebar from './sidebar/Sidebar';
import Profile from './ProfilePage/Profile';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/login';


function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <Sidebar />
        <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/login" element={ <Login />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
   
  );
}
export default App;
