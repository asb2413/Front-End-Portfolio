
import './app.css'
import acountImg from './photos/account.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/navbar/Topbar.jsx';
import {BrowserRouter , Route , Routes , Link} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About'
import Content from './components/content/Content';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';






function App() {
    
   
 
  
    return (
      
      
        
        
        <BrowserRouter>
         
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Project' element={<Project/>}/>
          
        </Routes>

        <div className="app">
        
        
            
        </div> 
        
      </BrowserRouter>

      
    
    );
 
}


export default App;
