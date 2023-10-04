import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
           home : {user}
        </div>
    );
};

export default Home;