import PropTypes from 'prop-types';

import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className='text-center'><span className="loading text-primary loading-ring loading-lg"></span></div>
    }
    
    if(user){
        return children;
    }
    
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;
PrivetRoute.propTypes = {
    children: PropTypes.node,
    
}