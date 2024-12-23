import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Slide, toast } from "react-toastify";


const Navbar = () => {

    const navigate = useNavigate();

    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/addservice">Add Service</NavLink></li>
        <li><NavLink to="/myreview">My Reviews</NavLink></li>
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
                console.log('ERROR', error.message);
                toast.error('Something Went Wrong', {
                    position: 'bottom-right',
                    transition: Slide
                })
            })
    }




    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="flex items-center gap-2">
                                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                        <img className="w-12 h-12 rounded-full object-cover" src={user.photoURL} alt="profile photo" />
                                    </div>

                                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                                </div>
                            </>
                            :
                            <>
                                <Link to="/signin" className="btn">Sign In</Link>
                                <Link to="/register" className="btn">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;