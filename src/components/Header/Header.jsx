import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Header = () => {
  const {user, signOutUser} = useContext(AuthContext);

  const handleLogOut =()=>{
    signOutUser()
    .then(()=>{
      alert('User Logout')
    })
    .catch(error => {
      console.log(error.message)
    })
  }

    const navLinks = <>
    
        <li><NavLink
        to="/"
        className={({ isActive}) =>
          isActive ? " font-bold text-orange-500 underline" : ""
        }
      >
        Home
      </NavLink></li>
        <li><NavLink
        to="/about"
        className={({ isActive}) =>
          isActive ? "font-bold text-orange-500 underline" : ""
        }
      >
       About
      </NavLink></li>
        <li><NavLink
        to="/login"
        className={({ isActive}) =>
          isActive ? "font-bold text-orange-500 underline" : ""
        }
      >
       Login
      </NavLink></li>
        <li><NavLink
        to="/register"
        className={({ isActive}) =>
          isActive ? "font-bold text-orange-500 underline" : ""
        }
      >
       Register
      </NavLink></li>
    
    </>


    return (
        <section className="mb-8">
        <div className="navbar bg-blue-400 py-3 px-5 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Context Router</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        {user && <span>{user.email}</span> }
        {
          user ? <>
          <button onClick={handleLogOut} className="btn btn-sm btn-primary">Sign Out</button>
          </> : <Link to='/login'><button className="btn btn-sm btn-primary">Login</button></Link>
         }
          
        </div>
      </div>
        </section>
    );
};

export default Header;