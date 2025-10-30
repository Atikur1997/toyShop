import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import { signOut } from 'firebase/auth';

const links = <>
    <NavLink to="/" className="hover:bg-pink-300 hover:text-white py-2 rounded-lg px-3 duration-[1s]">Home</NavLink>
    <NavLink to="/registration" className="hover:bg-pink-300 hover:text-white py-2 rounded-lg px-3 duration-[1s]">Sign Up</NavLink>

</>
const Navbar = () => {

    const { user, logout } = use(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                
             })
            .catch((error) => {
                console.log(error.message);
            });

    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl" href='/'>Toy-Story</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='flex gap-10 merriweather text-xl font-bold'>
                            {
                                links
                            }
                        </div>
                    </ul>




                </div>
                <div className="navbar-end px-4">
                    {user ? (

                        <div className="flex items-center gap-4 tooltip">
                            <span className="text-lg font-medium flex items-center gap-5 merriweather tooltip tooltip-bottom" data-tip={`welcome  ${user.displayName || user.email}!`}>
                                {user.photoURL ? <img className='w-10 h-10 rounded-full mr-2' src={user.photoURL} alt="User Profile" /> : <CgProfile className='w-[50px] h-[40px]' />}

                            </span>
                            <button
                                onClick={handleLogout}
                                className="btn bg-red-500 text-white hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (

                        <NavLink to="/login" className="btn bg-green-500 text-white">
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;