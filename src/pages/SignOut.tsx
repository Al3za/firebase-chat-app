import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
    const nav= useNavigate()

    const logUt = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            nav('/')
        }).catch((error) => {
             console.log('an error happend')
        })
    }
    return (
        <div>
            <button onClick={(e)=> logUt()} > Log out </button>
        </div>
    )
}

export default SignOutButton