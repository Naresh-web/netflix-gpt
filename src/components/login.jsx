import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const email = useRef(null)
  const password = useRef(null)
  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn)
  }
  const handleSubmit = () => {
    console.log(email);
    console.log(password);
    const message = checkValidData(name.current.value, email.current.value, password.current.value)
    setErrorMessage(message)

  }
  return <>
        <div className="login">
          <div className="logo">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
          </div>
          <picture className='banner'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt="" />
          </picture>
          
          <form action="" onSubmit={(e) => e.preventDefault()}>
          {isSignIn ? (<h2>Sign In</h2>) : (<h2>Sign up</h2>)}
          {!isSignIn && <input type="text" placeholder='Enter name' required/>}
            <input ref={email} type="text" placeholder='Enter email' required/>
            <input ref={password} type="password" placeholder='Enter password' required/>
            <button type='submit' onClick={handleSubmit}>{isSignIn ? 'Sign In' : 'Sign up'}</button>
            <p>{errorMessage}</p>
            {isSignIn ? (<h4>New to Netflix? <a onClick={handleSignInToggle}> {!isSignIn? 'Sign In' : 'Sign up'} </a> now </h4>) : (<h4>Already have an account ? <a onClick={handleSignInToggle}> {!isSignIn? 'Sign In' : 'Sign up'} </a></h4>)}
            
          </form>
        </div>
  </>
   
}

export default Login