import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState()

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser => {
         console.log('user: ', currentUser)
         setUser(currentUser)
      }));
      return () => {
         unsubscribe()
      }

   }, []);

   const providerLogin = (provider) => {
      return signInWithPopup(auth, provider)
   }
   const authInfo = { user, providerLogin };
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;