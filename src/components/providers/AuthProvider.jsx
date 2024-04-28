import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'; // Correct import of GithubAuthProvider
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();
const gitHubAuthProvider = new GithubAuthProvider(); // Correctly spelled GithubAuthProvider

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubAuthProvider); // Use gitHubAuthProvider
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('observing current user inside useEffect of AuthProvider', currentUser);
        });
       
        return () => {
            unSubscribe();
        } 
    }, []);

    const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, logout, signInWithGithub };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};
