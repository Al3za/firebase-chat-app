import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';


const HomePage = () => {

   const auth = getAuth()

    return (
        <div>
            <p> Home page ( protected with firebase ) </p>
            <button onClick={() => signOut(auth)}> sign out of Firebase </button>
        </div>
    )
}

export default HomePage 