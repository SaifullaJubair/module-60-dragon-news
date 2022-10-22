import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

   const [user, setUser] = useState()
   //loading state:
   const [loading, setLoading] = useState(true)
   const providerLogin = (provider) => {
      setLoading(true)
      return signInWithPopup(auth, provider)
   }
   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut = () => {
      setLoading(true)
      return signOut(auth);
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log('Inside auth state change ', currentUser);
         setUser(currentUser)
         setLoading(false)
      });
      return () => {
         unsubscribe()
      }

   }, []);

   const authInfo = {
      user,
      loading,
      providerLogin,
      logOut,
      createUser,
      signIn
   };
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;