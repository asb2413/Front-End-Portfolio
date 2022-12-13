import React from 'react'
import './skills.css'
import { FaCss3Alt,FaGitAlt,FaJsSquare,FaReact,FaBootstrap,FaSass} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

export default function Skills() {
  return (

    <div className='skills'>
      <div className='title'><h1>Programming Skills</h1></div>
    <div className='contain'>
      
      <div className='line-1'>
            <div className='containIcon'>
            <div className='back'><AiFillHtml5 className='icon' /></div>
            <div className='text'>
            <h1>HTML</h1>
            <p>making semantic html with multi tags <br/>
            As we know the HTML is the best page structure
            language, I can create multi tags and contains.<br/>
              
              
              </p>
            </div>
            </div>
            <div className='containIcon'>
            <div className='back'><FaCss3Alt className='icon' /></div>
            <div className='text'>
            <h1>CSS</h1>
            <p>using CSS for style the pages <br/>
            CSS can give you a lot of choices to style your
            website. I am using CSS to make custom layouts and more.<br/>
              
              
              </p>
            </div>
            </div>
            <div className='containIcon'>
            <div className='back'><FaJsSquare className='icon' /></div>
            <div className='text'>
            <h1>JAVASCRIPT</h1>
            <p>using JS for Programming the page <br/>
               there are a lot of features in JS<br/>
               I can work with DOM, Regular expression, Promises, Fetch API and more.
              
              </p>
            </div>
            </div>

      </div>

      <div className='line-2'>
             
      <div className='containIcon'>
            <div className='back'><FaReact className='icon' /></div>
            <div className='text'>
            <h1>REACT.JS</h1>
            <p>I'm using React library <br/>
               react.js make Javascript easier and add to it more features<br/>
               Im using react.js features like hooks, routes, and more.
              
              </p>
            </div>
            </div>


            <div className='containIcon'>
            <div className='back'><FaBootstrap className='icon' /></div>
            <div className='text'>
            <h1>BOOTSTRAP</h1>
            <p>using Bootstrap framework <br/>
               Bootstrap can make CSS faster and easier<br/>
               I'm using Bootstrap to style the pages.
              
              </p>
            </div>
            </div>


            <div className='containIcon'>
            <div className='back'><FaSass className='icon' /></div>
            <div className='text'>
            <h1>SASS</h1>
            <p>Using sass language with CSS <br/>
               sass is good with CSS it gives you<br/>
               programming languages features like conditions, loops, and moret<br/>
               I'm using sass to write CSS better.
              
              </p>
            </div>
            </div>
            

      </div>
    
      <div className='line-3'>
 
            <div className='containIcon'>
            <div className='back'><FaGitAlt className='icon' /></div>
            <div className='text'>
            <h1>GIT</h1>
            <p>Using git, and GitHub to share my code and files <br/>
               I'm using GitHub to share my files and code, and update my pages.<br/>
              
              
              </p>
            </div>
            </div>

            
      </div>

    </div>
    
    
    
    </div>

    
  )
}
