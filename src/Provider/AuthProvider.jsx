import React, { createContext, useEffect, useState, } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const logout = () => {
        return signOut(auth);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logout,
    }



    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider;