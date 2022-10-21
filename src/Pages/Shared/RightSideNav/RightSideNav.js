import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';


import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaLinkedin } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';



const RightSideNav = () => {
   return (
      <div>
         <div>
            <ButtonGroup vertical>
               <Button className='mb-2' variant='outline-dark'>
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
