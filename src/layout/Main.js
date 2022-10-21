import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <Container>
            <Row>
               <Col lg='2' className='d-none d-lg-block' sm='12'>
                  <LeftSideNav></LeftSideNav>
               </Col>
               <Col lg='7' sm='12' >
                  <Outlet></Outlet>
               </Col>
               <Col lg='3' sm='12'>
                  <RightSideNav></RightSideNav>
               </Col>
            </Row>
         </Container>
         <Footer></Footer>
      </div>
   );
};

export default Main;