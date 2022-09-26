// In App.js in a new project
import React, { useEffect, useState } from 'react'
import './firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import ToMain from './routes/ToMain';
import ToAuth from './routes/ToAuth';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  let auth = getAuth()
  useEffect(() => {
    let mVerify = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    })
    return mVerify
  }, [auth])
  return (
    <>
      {isAuth ? <ToMain /> : <ToAuth />}
    </>
  )
}

export default App;