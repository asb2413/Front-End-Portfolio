import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './topbar.css'
import account from'../../photos/account.png'
import {Link} from 'react-router-dom';
import {BsBrightnessAltHigh} from 'react-icons/bs'

export default function Topbar() {
  return (
    
    <Navbar className='navbar '  expand="lg" fixed="top">
      <Container className=" container d-flex justify-content-evenly">
        <div className='info'>
       <img className='my-photo' src={account} alt="img" />
       <h2 className='name'>Abdullah</h2>
       </div>
           
           <div className='list d-flex justify-content-end'>
          <Nav.Link  as={Link} to='/'>Home</Nav.Link>
          <Nav.Link  as={Link} to='About'>About</Nav.Link>
          <Nav.Link  as={Link} to='Contact'>Contact</Nav.Link>
          </div>
          <div className='contact-button'>
          <button  >Contact Me</button>
          </div>

          <div className='sun'><BsBrightnessAltHigh className='sun'/></div>
      </Container>
    </Navbar>
  
   
  );
}

