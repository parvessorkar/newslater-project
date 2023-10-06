import { Link, NavLink } from "react-router-dom";
import profile from '../../public/assets/user.png'
import { useContext } from "react";
import { authContext } from "../Component/Provider/Provider";

const Navbar = () => {
  const { user,logOut } = useContext(authContext)
  const handelSignOut = () => {
    logOut()
      .then()
    .catch()
  }
  const Navlinks = (<div className="flex">  
     <NavLink to={'/'}> <li>
      <a> Home</a>
      </li></NavLink>
     <NavLink> <li>
        <a>About</a>
      </li></NavLink>
     <NavLink> <li>
        <a>Career</a>
      </li></NavLink>
     
    </div>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Navlinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={profile} />
          </div>
        </label>
        {user ? (
          <button onClick={handelSignOut}>sign out</button>
        ) : (
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
