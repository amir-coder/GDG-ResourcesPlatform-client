import React from 'react';
import './App.css'
import Sidebar from './sidebar/Sidebar';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
;


function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <Sidebar />
        <Routes>
           <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
   
  );
}
export default App;
