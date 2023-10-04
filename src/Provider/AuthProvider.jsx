import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, } from "react";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
        

        // create user
        const createUser = (email, password) =>{
           return  createUserWithEmailAndPassword(auth, email, password);
        }

        // login user
        const loginUser = (email, password)=>{
            return signInWithEmailAndPassword(auth,email, password)
        }


    const user = 'Mrs. Maya';



    const authInfo = {
        user,
        createUser,
        loginUser,
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