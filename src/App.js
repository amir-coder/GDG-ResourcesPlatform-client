import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import DesignComponent from './pages/Design';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
      <div className='App'>
       <Sidebar/> 
      </div>         
   
  );
}
export default App;
