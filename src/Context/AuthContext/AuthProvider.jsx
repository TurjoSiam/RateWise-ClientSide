import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import axios from "axios";


const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userUpdateWhenSignin = (updatedInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedInfo);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser?.email };

                axios.post('https://assignment-11-beta.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log("login", res.data)
                        setLoading(false);
                    });
            }
            else {
                axios.post('https://assignment-11-beta.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log("logout", res.data)
                        setLoading(false);
                    })
            }




        })
        return () => {
            unSubscribe();
        }
    }, [])






    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        userUpdateWhenSignin,
        signOutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;