import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

   const [user, setUser] = useState()
   //loading state:
   const [loading, setLoading] = useState(true)

   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile)
   }
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
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
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
      signIn,
      updateUserProfile,
      verifyEmail
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