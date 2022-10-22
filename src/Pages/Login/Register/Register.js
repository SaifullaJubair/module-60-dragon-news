import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
   const [accepted, setAccepted] = useState(false)
   const [error, setError] = useState('')

   const handleTerms = event => {
      setAccepted(event.target.checked)
   }
   const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
   const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.password.value;
      console.log(name, photoURL, password, confirm)
      createUser(email, password)
         .then(res => {
            const user = res.user
            console.log(user);
            form.reset()
            setError('')
            handleUpdateUserProfile(name, photoURL)
            handleEmailVerification();
            toast.success('Please check your Email Address and verify your Email')
         })
         .catch(error => {
            console.error(error)
            setError(error.message)
         })
      const handleUpdateUserProfile = (name, photoURL) => {
         const profile = {
            displayName: name,
            photoURL: photoURL
         }
         updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
      }
   }
   const handleEmailVerification = () => {
      verifyEmail()
         .then(() => { })
         .catch(error => () => {
            console.error(error);
         })
   }

   return (
      <Form onSubmit={handleSubmit} >
         <Form.Group className="mb-3" controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name='displayName' type="text" placeholder="Your Name" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="photoURL">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" placeholder="Your PhotoURL" name='photoURL' required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name='confirm' type="password" placeholder="Confirm Password" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="checkbox">
            <Form.Check
               type="checkbox"
               onClick={handleTerms}
               label={<> <Link to={'/conditions'}>Terms and Conditions</Link></>} />
         </Form.Group>
         <Link to='/login'><Button variant="link" className='text-dark'>Already have an account? Login</Button></Link>
         <p className='text-danger'>{error}</p>
         <Button disabled={!accepted} variant="primary" type="submit">
            Register
         </Button>
      </Form>
   );
};

export default Register;