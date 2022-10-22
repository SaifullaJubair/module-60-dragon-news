import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Register = () => {

   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;
      const confirm = form.password.value;

   }
   return (
      <Form onSubmit={handleSubmit} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Your Name" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" placeholder="Your PhotoURL" name='photoURL' required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name='confirm' type="password" placeholder="Confirm Password" required />
         </Form.Group>

         <Button variant="primary" type="submit">
            Register
         </Button>
      </Form>
   );
};

export default Register;