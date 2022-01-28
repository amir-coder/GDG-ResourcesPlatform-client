import React from 'react';
import { BiSearch } from 'react-icons/bi';
import {IoClose} from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';


import "./DetailedRessources.css"


const title = "introduction to web developpement"
const category="web developement"
const level = "begginer"
const type = "video"
const description = "Did you know you can go from Zero Skills to a Fully Qualified Cash Earning Web Developer in only a few weeks? Well let me tell you: If you are looking for a truly 100% Comprehensive Web Development Course, that will take you from learning the basics to mastering the most advanced web development techniques, then be certain that you have come to the right place.Taking this course will help you achieve your dream of becoming a professional web developer, and you will be ready to build powerful and responsive websites to a highly professional degree using today’s most advanced and up to date web technologies within a few weeks from now.In order to guarantee the success of your learning experience, this course was divided into perfectly structured Chapters consisting of ~100 hours of crystal clear and 100% hands-on engaging lectures."
function Home() {
  return (
    <div className="DetailedRessorce">
      <div class="input-box">
         <BiSearch className='iconSearch'/> 
         <input type="text" class="form-control" placeholder='      search for a topic' style={{borderRadius : 100}}/>  </div>
    <div className='contentDetailed '>
        <h2 id='title'>Title</h2>
        <p>{title}</p>
        <span><IoClose /></span>
        <h2>Category</h2>
        <p>{category}</p>
        <h2>Level</h2>
        <p>{level}</p>
        <h2>Type</h2>
        <p>{type}</p>
        <h2>Description</h2>
        <p>{description}</p>
        
       
    </div>
   

    </div>

   

    
  );
}

export default Home;