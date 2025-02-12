import { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Slide, toast } from "react-toastify";
import logo from "/logosm.png"
import sun from "/sun.png"
import moon from "/moon.png"
import { useState } from "react";


const Navbar = () => {

    const navigate = useNavigate();

    const { user, signOutUser } = useContext(AuthContext);

    const links = <>
        <li><NavLink className="px-0" to="/">Home</NavLink></li>
        <li><NavLink className="px-0" to="/allservices">Services</NavLink></li>
        {
            user && <>
                <li><NavLink className="px-0" to="/addservice">Add Service</NavLink></li>
                <li><NavLink className="px-0" to="/myreview">My Reviews</NavLink></li>
                <li><NavLink className="px-0" to="/myservice">My Services</NavLink></li>
            </>
        }
        <li><NavLink className="px-0" to="/aboutus">About Us</NavLink></li>
        <li><NavLink className="px-0" to="/contactus">Contact Us</NavLink></li>
    </>

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Signout Successful', {
                    position: 'bottom-right',
                    transition: Slide
                });
                navigate("/signin")
            })
            .catch(error => {
                console.log('ERROR occured', error.message);
                toast.error('Something Went Wrong', {
                    position: 'bottom-right',
                    transition: Slide
                })
            })
    }

    // theme toggler
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      // update state on toggle
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      // set theme state in localstorage on mount & also update localstorage on state change
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);


    return (
        <div className="lg:px-20 sticky top-0 bg-teal-50 z-10">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center">
                        <img className="w-10" src={logo} alt="logo" />
                        <h2 className="text-xl font-bold text-blue-900">RateWise</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-7">
                        {links}
                    </ul>
                </div>
                <button className="btn btn-square btn-ghost">
                    <label className="swap swap-rotate w-12 h-12">
                        <input type="checkbox" onChange={handleToggle}
                            // show toggle image based on localstorage theme
                            checked={theme === "light" ? false : true} />
                        {/* light theme sun image */}
                        <img src={sun} alt="light" className="w-8 h-8 swap-on" />
                        {/* dark theme moon image */}
                        <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
                    </label>
                </button>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="flex items-center gap-2">
                                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                        <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="profile photo" />
                                    </div>

                                    <button onClick={handleSignOut} className="btn anim text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Out</button>
                                </div>
                            </>
                            :
                            <>
                                <Link to="/signin" className="btn text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</Link>
                                <Link to="/register" className="btn text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;