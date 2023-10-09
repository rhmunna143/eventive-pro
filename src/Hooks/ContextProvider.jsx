/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import toast from "react-hot-toast";


export const AllContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [socialUser, setSocialUser] = useState(null)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [path, setPath] = useState("")

    const register = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)

        signOut(auth).then(() => {
            setSocialUser("")
            
            toast.success("Logout success! Please login now")
        }).catch((error) => {
            toast.error(error.message)
        });
    }

    const googleSignIn = () => {
        setLoading(true)

        signInWithPopup(auth, googleProvider)
        .then(response => {
            const name = response?.user?.displayName;

            setSocialUser(response?.user)

            toast.success(name + " Welcome! Login success.")
        })

        .catch(err => {
            toast.err(err?.message)
        })
    }

    const facebookLogin = () => {
        setLoading(true)

        signInWithPopup(auth, facebookProvider)
        .then(response => {
            const name = response?.user?.displayName;

            setSocialUser(response?.user)

            toast.success(name + " Welcome! Login success.")
        })

        .catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const info = {
        register,
        login,
        user,
        logout,
        googleSignIn,
        facebookLogin,
        loading,
        socialUser,
        path,
        setPath
    }

    return (
        <AllContext.Provider value={info} >
            {children}
        </AllContext.Provider>
    );
};

export default ContextProvider;