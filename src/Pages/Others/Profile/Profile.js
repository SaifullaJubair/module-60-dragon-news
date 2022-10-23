import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
   const { user } = useContext(AuthContext)
   console.log(user);
   return (
      <div className='shadow text-center p-3 m-3'>
         <h3> UserName: {user?.displayName}</h3>
         <p>UserEmail: {user?.email}</p>
         <img src={user?.photoURL} className='w-75 rounded' alt="User img" />
         <p>PhotoURL: {user?.photoURL}</p>

      </div>
   );
};

export default Profile;