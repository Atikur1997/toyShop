import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';

const Registration = () => {
    const { createUser, setUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.PhotoURL.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {

                    setUser({ ...user, displayName: name });
                });
            })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };



    return (
        <div className="py-20">
            <h1 className="lobster text-5xl text-center">Sign Up Now!</h1>
            <p className="text-gray-500 text-center text-2xl py-3">
                Explore the World of imagination
            </p>
            <div className="text-center">
                <form onSubmit={handleRegister}>
                    <div className="card-body max-w-[500px] mx-auto merriweather shadow-lg shadow-green-400">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Enter your Name"
                            name="name"
                            required
                        />

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            name="email"
                            required
                        />
                        <label className="label">Photo URL</label>
                        <input
                            type="url"
                            className="input w-full"
                            placeholder="Enter your photo URL"
                            name="PhotoURL"
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            name="password"
                            required
                        />

                        <button className="btn btn-neutral mt-4 hover:bg-green-500 hover:border-0">
                            Register
                        </button>
                        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] hover:bg-green-500">
                            <svg aria-label="Google logo" width="32" height="45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55 "></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
