import React from 'react'
import './home.css'
import Content from '../content/Content'
import Screen from '../screen/Screen'
import Skills from '../skills/Skills'
import Footer from '../footer/Footer'


export default function Home() {
  return (
    <div className='home'>
        
         <Content/>
         <Screen/>
         <Skills/>
         <Footer/>

    </div>
  )
}
