import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState, } from "react";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
        

        // create user
        const createUser = (email, password) =>{
           return  createUserWithEmailAndPassword(auth, email, password);
        }

        // login user
        const loginUser = (email, password)=>{
            return signInWithEmailAndPassword(auth,email, password)
        }

        // signOut
        const signOutUser =()=>{
          return  signOut(auth);
        }

        const googleProvider = new GoogleAuthProvider();
        // google provider
        const signInGoogle =()=>{
          return signInWithPopup(auth, googleProvider);
        }


        // Observer
        useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                console.log('Observer', currentUser);
            })
            return ()=>{
                unSubscribe();
            }
        }, [])






    const authInfo = {
        user,
        createUser,
        loginUser,
        signOutUser,
        signInGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
    
}