
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import app from "../../firebase/firebase.config";
const auth = getAuth(app);
export const authContext = createContext(null)

const Provider = ({ children }) => {
  const [user, setuser] = useState(null)
  
  const creatUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
    
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
  return  signOut(auth)
  }
  useEffect(() => {
   const unsubcribe = onAuthStateChanged(auth, currentUser => {
      console.log('user inthe auth state change', currentUser);
      setuser(currentUser)
   });
    return () => {
      unsubcribe();
    }
    
  },[])
 const info = {
   user,
   creatUser,
   signIn,
   logOut
   
  }
  
  return (
    <authContext.Provider value={info}>
      {children}
    </authContext.Provider>
  );
};

export default Provider;