import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
            if (user.emailVerified) {
               navigate(from, { replace: true })
            }
            else {
               toast.error('Your email not verified')
            }
            setError('')
            toast.success('Successful Login')
         })
         .catch(error => {
            console.error(error)
            // setError(error.message)
            toast.error(error.message)
         })
   }
   return (
      <Form onSubmit={handleSubmit} >
         <h2>Login</h2>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />

         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
         </Form.Group>
         <Link to='/login'><Button variant="link" className='text-dark'>Don't have any account? SignUp</Button></Link>
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