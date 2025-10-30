import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { LogIn } = use(AuthContext);

    const navigation = useNavigate();
    const [errorMsg, setErrorMsg] = useState("")
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorMsg("");
        LogIn(email, password)
            .then((result) => {
                navigation('/');
            })
            .catch((error) => {
                console.log(error.code);
                let message = "";

                if (
                    error.code === "auth/user-not-found" ||
                    error.code === "auth/wrong-password"
                ) {
                    message = "Invalid email or password. Please try again.";
                } else if (error.code === "auth/invalid-email") {
                    message = "Please enter a valid email address.";
                } else if (error.code === "auth/too-many-requests") {
                    message = "Too many unsuccessful login attempts. Please try again later.";
                } else if (error.code === "auth/invalid-credential") {
                    message = "The provided credential is not registered. Please register first!";
                } else {
                    message = "Something went wrong. Please try again later.";
                }

                setErrorMsg(message);
                toast.error(`❌ ${message} ❌`, { position: "top-center" });
            });



    }
    return (
        <div>
            <div className='py-20'>
                <h1 className='lobster text-5xl text-center'>Sign In Now!</h1>
                <p className='text-gray-500 text-center text-2xl py-3'>Explore the World of imagination</p>
                <div className=' text-center'>
                    <form onSubmit={handleLogin}>
                        <div className="card-body max-w-[500px] mx-auto merriweather shadow-lg shadow-green-400 ">


                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" name='email' />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" name='password' />
                            <div className='flex flex-col md:flex-row items-center justify-between pt-4'>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <div>
                                    <p>Don't have an account? <NavLink to="/registration" className="underline text-blue-800">Register Now !</NavLink></p>
                                </div>
                            </div>
                            <button className="btn btn-neutral mt-4 hover:bg-green-500 hover:border-0">Login</button>
                            <button className="btn bg-white text-black border-[#e5e5e5] hover:bg-green-500">
                                <svg aria-label="Google logo" width="32" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55 "></path></g></svg>
                                Login with Google
                            </button>

                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position='top-center' autoClose={2000} closeOnClick={true} ></ToastContainer>
        </div>
    );
};

export default Login;