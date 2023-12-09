import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import  auth  from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user,setUser] = useState()
    const [loading,setLoading ] = useState(true)
    // sign in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create user using email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user using email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out a user
    const signOutFunction = () => {
        return (
            signOut(auth)
        )
    }

    // observe events 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
}, [])

const authInfo = {
    googleSignIn,
    createUser,
    signIn,
    signOutFunction,
    user,
    loading
}
return (
    <AuthContext.Provider value={authInfo}>

        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;