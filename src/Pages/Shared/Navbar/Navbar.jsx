import React from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

  const menuItems = (
    <React.Fragment>
      <li className="navitem">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2"
              : "font-medium tracking-wide  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform  "
          }
        >
          Home
        </NavLink>
      </li>


 
          <li>
     
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform "
                    : "font-medium tracking-wide   transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform  "
                }
              >
                My Cart
              </NavLink>
            
                </li>

                <li>
       
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
                    : "font-medium tracking-wide  transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform "
                }
              >
                Dashboard
              </NavLink>
              </li>

            {/* <button
            //   onClick={handleLogOut}
              className="btn-sm mt-2 items-center text-black py-0 bg-myYellow ml-2 hover:bg-info"
            >
              Log Out
            </button> */}
     

        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform "
                  : "font-medium tracking-wide   transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform "
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide transition-colors duration-200 text-sky-400  border-b-transparent ease-linear transform border-b-2 hover:border-pink-600"
                  : "font-medium tracking-wide   transition-colors duration-200 hover:text-sky-400 border-b-transparent ease-linear transform "
              }
            >
              Register
            </NavLink>
          </li>
        </>
 
    </React.Fragment>
  );

  return (
    <div className="navbar bg-slate-200  py-6 px-4 flex justify-between dark:text-white mx-0 border">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-blue-300 border-none hover:bg-gray-500 lg:hidden"
          >
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent  normal-case text-xl md:text-2xl"
        >
        
          <p className="mx-1 pl-3 md:mx-3 text-blue-400">
         Trendy Mart
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;