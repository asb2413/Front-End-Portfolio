import React, {useState, useEffect} from 'react'
import './screen.css'
import reactImg from '../../photos/react-js.svg'
import jsImg from '../../photos/js.svg'
import cssImg from '../../photos/cssImg.svg'
import htmlImg from '../../photos/htmlImg.svg'


export default function Screen() {

  // state for number of slide 
  const [currentSlid, setCurrentSlid] = useState(0)
  // array of imgs 
  const imgs = [htmlImg,cssImg,jsImg,reactImg]
  // state for current img 
  const [img , setimg] = useState(imgs[0])

  // array of heads
  const badgsH1 = [
    "HTML", "CSS", "JAVASCRIPT", "REACT.JS"
    ]
  
    //array of paragraphs
  const badgsP = [
  "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScrip",
  "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
  "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
  ]

  const colors = ["#E65100","#0277BD","#F7DF1E","#00D8FF"]

  // state for h1, p 
  const [h1, setH1] = useState(badgsH1[0])
  const [p, setP] = useState(badgsP[0])

  
  const [borderColers, setBorderColor] = useState(colors[0])

 

// function make limit for imgs array and seting img 
function currentImg(){
  
  if(currentSlid > 3){

    setCurrentSlid(0)

  }

  // set img  
  setimg(imgs[currentSlid])
  // set  badge
  setH1(badgsH1[currentSlid])
  setP(badgsP[currentSlid])
  setBorderColor(colors[currentSlid])
}





// use effect for control the render and the slide show

useEffect(() => {

// create a timer for increese current slide by 1 


let timer = window.setTimeout(()=>{

    setCurrentSlid(currentSlid + 1)
    
},6000)

currentImg()

// add events on click for buttons to switch the slide  
function activeSlide(){

const slide1 = document.getElementById("slide-1")
slide1.addEventListener('click', ()=>{
    
// we clear the timer to reset because if we don't it will be going the wrong way
    window.clearTimeout(timer)
    
    setCurrentSlid(0)

 })

 const slide2 = document.getElementById("slide-2")
slide2.addEventListener('click', ()=>{
  
  window.clearTimeout(timer)
  setCurrentSlid(1)
  
 })

 const slide3 = document.getElementById("slide-3")
slide3.addEventListener('click', ()=>{

  window.clearTimeout(timer)
  setCurrentSlid(2)
  
 })

 const slide4 = document.getElementById("slide-4")
slide4.addEventListener('click', ()=>{

  window.clearTimeout(timer)
  
  setCurrentSlid(3)
  
 })

 // function to add and remove the colors on click the button and on change the slide
 function buttonActive(){

  
  currentSlid === 0 ? slide1.style.backgroundColor = "#E65100" : slide1.style.backgroundColor = "white";
  currentSlid === 1 ? slide2.style.backgroundColor = "#0277BD" : slide2.style.backgroundColor = "white";
  currentSlid === 2 ? slide3.style.backgroundColor = "#F7DF1E" : slide3.style.backgroundColor = "white";
  currentSlid === 3 ? slide4.style.backgroundColor = "#00D8FF" : slide4.style.backgroundColor = "white";
  
  }
  
  buttonActive()

  



  

}

activeSlide();

//style={{borderColor: borderColers }}



},
// if crunnentSlide change the useEffect working 1 time
[currentSlid])



  return (

    <div className='screen'>

      <div className='contain' id='contain' style={{borderColor:borderColers}}>
      
      <div className='badges'>

          <h1>{h1}</h1>
          <p>{p}</p>
          
        </div>

        <div  className='buttons'>

          <button className='btns ' id='slide-1'></button>
          <button className='btns ' id='slide-2'></button>
          <button className='btns 'id='slide-3'></button>
          <button className='btns 'id='slide-4'></button>

        </div>

        <img id='backgroundImg' src={img} alt="" />

        </div>
        </div>
  );
}
