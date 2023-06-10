import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            if(loggedUser){
                axios.post('http://localhost:5000/jwt' , {email: loggedUser.email})
                .then(data => {
                    localStorage.setItem('access-token' , data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        });
        return () => {
            unsubcribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        signIn,
        googleSignIn,
        logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;