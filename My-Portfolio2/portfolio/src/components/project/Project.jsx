import React from 'react'
import Topbar from '../navbar/Topbar'
import Footer from '../footer/Footer'
import "./project.css"

export default function Project() {
  return (
    <div className='project'>
      
      <div className='contain'>

        <h1>Project Files</h1>
        <p>As you see I created this portfolio step by step almost without any libraries.
           I know it is not a clean code but I will do some updates later so you are welcome to contact me and give some notes and help me update it,
           you can also download the project files from my Github.</p>

           <a href="https://github.com/asb2413" target="_blank">GitHub</a>

      </div>

      
        
      <Topbar />
      <Footer/>
      
    
    </div>

    

  )
}
