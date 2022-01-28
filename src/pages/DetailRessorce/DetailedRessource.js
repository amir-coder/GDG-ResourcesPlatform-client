import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {IoClose} from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
//import 'bootstrap/dist/css/bootstrap.min.css';


import "./DetailedRessources.css"



function Detailressource() {

  const {id} = useParams();
  const [detRes , setDetRes] = useState( {
    title : "",
    categorie  :"" ,
    level : "" ,
    description : "" ,
    link : ""
  });

  useEffect(async()=> {
    console.log(id)
    const res = await axios.get(`https://gdg-api.herokuapp.com/ressources/${id}`)
    console.log(res.data);
    setDetRes(res.data)
  },[])

  return (
    <div className="DetailedRessorce">
      <Sidebar />
      <div class="input-box">
         <BiSearch className='iconSearch'/> 
         <input type="text" class="form-control" placeholder='      search for a topic' style={{borderRadius : 100}}/>  </div>
    <div className='contentDetailed '>
       <div style={{
         display: 'flex',
         justifyContent : 'space-between',
         
       }}>
       <h4 id='title'>Title: <span className='content'>{detRes.title}</span></h4>
        
        <button className='closeButton'><IoClose /></button>
       </div>
        
        
        <h4 id='category'>Category <span className='content'>: {detRes.categorie}</span></h4>
       
        <h4 id='level'>Level <span className='content'>: {detRes.level} </span></h4>
       
        <h4 id='type'>Type<span className='content'>: {detRes.type_ressource} </span></h4>
        
        <h4 id='description'>Description <span className='content'>: </span></h4>
        
        <p className='content'> {detRes.description}</p>

        <div style={{
         display: 'flex',
         justifyContent : 'right',
         
       }}>
       
        
        <button id='save' className='buttons'>Save</button>
        <button id='start' className='buttons' onClick={()=> window.open(detRes.link)} >Start</button>
       </div>
       
        
       
    </div>
   

    </div>

   

    
  );
}

export default Detailressource;