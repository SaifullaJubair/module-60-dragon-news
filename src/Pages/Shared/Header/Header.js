import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Header = () => {
   const { user, logOut } = useContext(AuthContext)
   const handleLogOut = () => {
      logOut()
         .then(() => { })
         .catch(error => console.error(error));
   }
   return (
      <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
         <Container>
            <Navbar.Brand><Link to='/'>Dragon-News</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link >All News</Nav.Link>
                  <Nav.Link >Pricing</Nav.Link>
               </Nav>
               <Nav>
                  <nav>
                     {
                        user?.uid ?
                           <>
                              <span>{user?.displayName}</span>
                              <Button variant="light" className='text-muted mb-2' onClick={handleLogOut}>Log out</Button>
                           </>
                           :
                           <>
                              <Link className='me-2 text-decoration-none text-muted' to='/login'>Login</Link>
                              <Link to='/register' className='text-decoration-none text-muted'>Register</Link>
                           </>
                     }
                  </nav>
                  <Link to='/profile'>
                     {user?.photoURL ?
                        <Image
                           style={{ height: '40px' }}
                           roundedCircle
                           className='ms-2'
                           src={user?.photoURL}>
                        </Image>
                        :
                        <FaUser className='ms-2'></FaUser>
                     }
                  </Link>
               </Nav>

            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Header;