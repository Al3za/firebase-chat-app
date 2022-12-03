import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const auth = getAuth()
    const navigate = useNavigate()
    const [authing, setAuthin] = useState<boolean>(false)

    //console.log(auth)
    
    const signInWithGoogle = async () => {
        setAuthin(true)

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(res => {
                console.log(res.user.uid);
                // remove this log when u deploy this app
                console.log(res.user.displayName)
                navigate('/')
            }).catch((err) => {
                console.log(err)
                setAuthin(false)
            })
    }

    return (
        <div>
            <p> Login Page </p>
            <button onClick={()=> signInWithGoogle()} disabled={authing} > Sign in with google </button>

        </div>
    )
}

export default LoginPage

    //https://renzoregio.medium.com/sign-in-with-google-or-github-using-firebase-signinwithpopup-38d0917a76c0
