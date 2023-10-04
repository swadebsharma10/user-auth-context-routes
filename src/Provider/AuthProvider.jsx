import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState, } from "react";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);
        

        // create user
        const createUser = (email, password) =>{
            setLoading(true)
           return  createUserWithEmailAndPassword(auth, email, password);
        }

        // login user
        const loginUser = (email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email, password)
        }

        // signOut
        const signOutUser =()=>{
            setLoading(true)
          return  signOut(auth);
        }

        const googleProvider = new GoogleAuthProvider();
        // google provider
        const signInGoogle =()=>{
            setLoading(true)
          return signInWithPopup(auth, googleProvider);
        }


        // Observer
        useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                console.log('Observer', currentUser);
                setLoading(false)
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
        signInGoogle,
        loading
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