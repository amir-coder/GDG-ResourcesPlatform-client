import React, { useState } from 'react';
import menu from "../assets/menu.svg";
import design from "../assets/design.svg";
import ai from "../assets/ai.svg";
import webdev from "../assets/webdev.svg";
import mobiledev from "../assets/mobdev.svg";
import profile from "../assets/user.svg";
import settings from "../assets/settings.svg";
import longline from "../assets/Ligne 10.svg";
import smalline from "../assets/Line 10.svg";
import logoGDG from "../assets/GDG_logo-black.svg";
import logoGDG_1 from "../assets/GDG.svg";
import logoWTM from "../assets/WTM_Logo.svg";
import logoWTM_1 from "../assets/wtm logo.svg";
import styled from "styled-components";
import NavLink, { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Sidebar.css";

//Note: when i use the tag <Link to="../pages/Design"> </Link> instead of the <a> 
//the sidebar will disappear
//i only did the exemple with the design file

// THIS IS THE CODE I USED IN App.js
/*
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import DesignComponent from './pages/Design';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
     <Router>
      <div className='App'>
       <Sidebar/>
       <Route path="./pages/Design" component={DesignComponent} />
      </div>         
    </Router>
  );
}
export default App;
*/

const ClosedLogowtm = styled.li`
  display: ${(props) => (props.clicked ? "none" : "flex")};
  img{
    width: 37px;
    height: 48px;
    
  } 
`;
const ClosedLogogdg = styled.li`
  display: ${(props) => (props.clicked ? "none" : "flex")};
  img{
    width: 45px;
    height: 48px;
  } 
`;
const GDGlogo = styled.li`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  padding-left:1rem;
`;
const Item = styled.li`
  text-decoration: none;
  color: var(--white);
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: ${(props) => (props.clicked ? "1rem" : "0.5rem")};;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(34%) sepia(28%) saturate(4650%) hue-rotate(342deg) brightness(95%) contrast(92%);
    }
  }
  img {
    width: 18px;
    height: auto;
  
  }
`;
const Line = styled.ul`
    display: ${(props) => (props.clicked ? "none" : "flex")};
    overflow: hidden;
    padding: 1rem 0;
    position: center;
    img{
      width:35px;
      height:auto;
    }
`;
const Longline = styled.ul`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  overflow: hidden;
  padding: 1rem 0;
  padding-left:1rem;
  position: center;
  img{
    width:200px;
    height:auto;
  }
`;

const Menubar = styled.li`
    margin-top: 1rem;
    margin-left: 0rem;
    padding-bottom:2rem;
    padding-left:0.5rem;
    display: ${(props) => (props.clicked ? "none" : "flex")};
`;
const Xbutton = styled.li`
  padding-top: 2rem;
  margin-left: 15rem;
  color: grey;
  display: ${(props) => (props.clicked ? "flex" : "none")};
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: #EA4334;
  }
`;

const Text = styled.span`
  color: grey;
  font-size:15px;
  text-decoration: none;
  font-family:Montserrat;
  paddind: 1rem 0;
  textAlign: 'center';
  display: ${(props) => (props.clicked ? "bloc" : "none")};
  margin-left: 1.5rem;
  transition: all 0.3s ease;
  &:hover {
    color: #EA4334;
  }
`;

const Title = styled.ul`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  transition: all 0.5s ease;
  padding-bottom: 1rem;
`;
const al = styled.a`text-decoration: none;`;
const Sidebar = () =>{
    const[click, setClick] = useState(false)
    const openSidebar = () => setClick(true)
    const closeSidebar = () => setClick(false)
    return(
        <div>
                <nav className={click ? 'nav-menu active' : 'nav-menu'}> 
                    <ul className='nav-menu-items'>

                        <Menubar clicked={click}>
                            <img className="icon" src={menu} alt="" clicked={click} onClick={() => openSidebar()}/>
                        </Menubar>

                        <Xbutton clicked={click}>  
                            <AiIcons.AiOutlineClose clicked={click} onClick={() => closeSidebar()} />  
                        </Xbutton>

                        <Title clicked={click}>
                          <li className="typeText1">GDG Ressource</li>
                          <li className="typeText2">Platform</li>
                        </Title>
                        
                        <Item clicked={click}>
                        <al href="../pages/AI">
                            <img className="icon" src={ai} alt=""/>
                            <Text clicked={click}>Artificial intelligence</Text>
                        </al>
                        </Item>

                        <Item clicked={click}>
                          <al href="../pages/Design">
                            <img className="icon" src={design} alt=""/>
                            <Text clicked={click}>Design</Text>
                          </al>
                        </Item >

                        <Item clicked={click}>
                        <al href="../pages/WebDev">
                            <img className="icon" src={webdev} alt=""/>
                            <Text clicked={click}> Web developpement</Text>
                        </al>
                        </Item>

                        <Item clicked={click}>
                        <al href="../pages/MobileDev">
                            <img className="icon" src={mobiledev} alt=""/>
                            <Text clicked={click}>Mobile developpement</Text>
                        </al>
                        </Item>

                        <Line clicked={click}>
                            <img src={smalline} alt=""/>
                        </Line>

                        <Longline clicked={click}>
                            <img src={longline} alt=""/>
                        </Longline>
                        
                        <Item clicked={click}>
                        <al href='../pages/Profile'>
                            <img className="icon" src={profile} alt=""/>
                            <Text clicked={click}>Profile</Text>
                        </al>
                        </Item>

                        <Item clicked={click}>
                          <al href='../pages/Settings'>
                            <img className="icon" src={settings} alt=""/>
                            <Text clicked={click}>Settings</Text>
                          </al>
                        </Item>

                        <ClosedLogogdg clicked={click}>
                            <img src={logoGDG_1} alt=""/>
                        </ClosedLogogdg>
                        <ClosedLogowtm clicked={click}>
                            <img src={logoWTM_1} alt=""/>
                        </ClosedLogowtm>

                        <GDGlogo clicked={click}>
                            <img className="gdglogo"src={logoGDG} alt=""/>
                        </GDGlogo>
                        <GDGlogo clicked={click}>
                            <img className="wtmlogo" src={logoWTM} alt=""/>
                        </GDGlogo>

                    </ul> 
                </nav>
                
            
        </div>
    );
}
export default Sidebar;