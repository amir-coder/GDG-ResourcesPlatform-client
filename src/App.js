
import './App.css'
import Sidebar from './sidebar/Sidebar';
import Profile from './ProfilePage/Profile';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    
      <BrowserRouter >
        <Sidebar />
        <Profile/>
        <Routes>
           <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
   
  );
}
export default App;
