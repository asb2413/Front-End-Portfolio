import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './topbar.css'
import account from'../../photos/account.png'
import {Link} from 'react-router-dom';
import {BsBrightnessAltHigh} from 'react-icons/bs'

export default function Topbar() {
  return (
    
    <div className='navbar'  >
      <Container className=" container d-flex justify-content-evenly">
        <div className='info'>
       <img className='my-photo' src={account} alt="img" />
       <h2 className='name'>Abdullah</h2>
       </div>
           
           <div className='list '>
          <Nav.Link  as={Link} to='/'>Home</Nav.Link>
          <Nav.Link  as={Link} to='Project'>Project</Nav.Link>
          
          </div>
          <div className='contact-button'>
          <button  ><a href="#contact">Contact Me</a></button>
          </div>

          <div className='sun'><BsBrightnessAltHigh className='sun'/></div>
      </Container>
    </div>
  
   
  );
}

