import React from 'react'
import './home.css'
import Content from '../content/Content'
import Screen from '../screen/Screen'
import Skills from '../skills/Skills'
import Footer from '../footer/Footer'
import About from '../about/About'
import Topbar from '../navbar/Topbar'



export default function Home() {
  return (
    <div className='home'>
        <Topbar />
         <Content/>
         <Screen/>
         <Skills/>
         <About/>
         <Footer />
         

    </div>
  )
}
