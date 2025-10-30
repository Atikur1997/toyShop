import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';

const Registration = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                return updateProfile(user, { displayName: name }).then(() => {

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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
