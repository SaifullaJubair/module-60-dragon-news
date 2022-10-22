import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Login = () => {
   const { signIn } = useContext(AuthContext);
   const navigate = useNavigate()
   const [error, setError] = useState('')
   const location = useLocation()
   const from = location.state?.from?.pathname || '/'


   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
         .then(res => {
            const user = res.user
            console.log(user);
            form.reset()
            navigate(from, { replace: true })
            setError('')
         })
         .catch(error => {
            console.error(error)
            setError(error.message)
         })
   }
   return (
      <Form onSubmit={handleSubmit} >
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />

         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
         </Form.Group>
         <p className='text-danger'>
            {error}
         </p>
         <Button variant="primary" type="submit">
            Login
         </Button>
      </Form>
   );
};

export default Login;