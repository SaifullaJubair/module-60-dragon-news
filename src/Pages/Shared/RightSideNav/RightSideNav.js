import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';


import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaLinkedin } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

   const { providerLogin } = useContext(AuthContext)
   const googleProvider = new GoogleAuthProvider()
   const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
         .then(res => {
            const user = res.user
            console.log(user);
         })
         .catch(error => console.error('error', error))
   }
   return (
      <div>
         <div>
            <ButtonGroup vertical>
               <Button className='mb-2' variant='outline-dark' onClick={handleGoogleSignIn}>
                  <FcGoogle /> Login Via Google
               </Button>
               <Button className='mb-2' variant='outline-dark'>
                  <FaGithub /> Login Via Github
               </Button>
            </ButtonGroup>
         </div>

         <div className='mb-2'>
            <ListGroup>
               <ListGroup.Item>
                  <FaFacebook></FaFacebook> Facebook
               </ListGroup.Item>
               <ListGroup.Item>
                  <FaTwitter /> Twitter
               </ListGroup.Item>
               <ListGroup.Item>
                  <FaTwitch /> Twitch
               </ListGroup.Item>
               <ListGroup.Item>
                  <FaWhatsapp /> Whatsapp
               </ListGroup.Item>
               <ListGroup.Item>
                  <FaLinkedin /> Linkedin
               </ListGroup.Item>
            </ListGroup>
         </div>
         <div>
            <BrandCarousel></BrandCarousel>
         </div>
      </div>
   );
};

export default RightSideNav;
