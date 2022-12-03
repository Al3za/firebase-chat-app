import './App.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase';
import { useState } from 'react';



const App = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const auth= getAuth(app)
  const signUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      // we create an email/password in firebase
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert('successufil created account')
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
        // ..
      });
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert('Sucessifully signed In')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
  });
  }

  return (
    <div className='App'>
      <h1>hej</h1>
      <input type="email" value={email} placeholder='please enter your email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" value={password} placeholder='please enter your password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={(e) =>  signUp() } >Create Account</button>
      <button onClick={(e)=>signIn()} >Sign in</button>
    </div>
  )
}


export default App