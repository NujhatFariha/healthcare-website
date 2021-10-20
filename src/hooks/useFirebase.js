import { getAuth, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebaseApp from "../Firebase/firebase.init";
initializeFirebaseApp();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    const signInUsingGithub = () => {
        setIsLoading(true);
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
    }
};

export default useFirebase;