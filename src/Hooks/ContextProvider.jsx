/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import toast from "react-hot-toast";


export const AllContext = createContext(null)

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const register = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {

        return signOut((auth) 
            .then(() => {
                toast.success("You logged out! Please login now.")
            })

            .catch((err) => {
                toast.error(err.message)
            })
        )
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => unsubscribe()
    }, [])

    const info = {
        register,
        login,
        user,
        logout
    }

    return (
        <AllContext.Provider value={info} >
            {children}
        </AllContext.Provider>
    );
};

export default ContextProvider;