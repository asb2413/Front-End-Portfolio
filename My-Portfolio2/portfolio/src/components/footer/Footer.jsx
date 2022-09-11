import React from 'react'
import './footer.css'
import { RiAccountPinCircleLine } from "react-icons/ri";
import { AiFillGithub,AiFillLinkedin,AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='footer'>
      
    <div className='section-1'>

      <div id='icon'> <RiAccountPinCircleLine /></div>

      <div className='text'>
        <h4>Abdullah Bouladame</h4>
        <p>I'm Front-End/react developer  <br/> This is my first portfolio and there are more objects coming.</p>
      </div>
      
      <div className='links'>

        <a href="https://github.com/asb2413" target="_blank"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/abdullah-s-bouladame-8811731a3" target="_blank"><AiFillLinkedin /></a>
        <a href=" mailto: abdullahs2413@gmail.com" target="_blank"><AiOutlineMail /></a>
      </div>

      <p className='moreInfo'>Email: abdullahs2413@gmail.com<br/>Phone: +96654670580</p>

      <p className='copy'>&copy; 2022 Abdullah Bouladame</p>
      
    </div>

      <div className='section-2'>

          <h6>Contact me here</h6>

          <div className='form' >

          <form action="">
             
          <div className='formContain'>
          <input type="text"  className='text' id='contact'/>
          <button>Send</button>
          </div>
  

          </form>

          </div>

      </div>
        
        

      </div>
  )
}
