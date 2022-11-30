import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'



export const AuthContext = createContext();
    const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const signUpFacebook = (provider) => {
        setLoading(true);
        return signInWithPopup(auth , provider);
    }

    const signUpGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth , provider)
    }


    const signIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    } , [])

    const updateUser = (userInformation) => {
        return updateProfile(auth.currentUser , userInformation);

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {createUser , signIn , signUpFacebook , logOut , user , loading , updateUser , signUpGoogle};
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;