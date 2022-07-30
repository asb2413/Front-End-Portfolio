
import './app.css'
import acountImg from './photos/account.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/navbar/Topbar.jsx';
import {BrowserRouter , Route , Routes , Link} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Content from './components/content/Content';
import Skills from './components/skills/Skills';






function App() {
    
   
 
  
    return (
      
      
        
        
        <BrowserRouter>
         
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Routes>

        <div className="app">
        <Topbar />
            
        </div> 
        
      </BrowserRouter>

      
    
    );
 
}


export default App;
