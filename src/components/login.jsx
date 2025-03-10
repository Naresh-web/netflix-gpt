import React from 'react'

const Login = () => {
  return <>
        <div className="login">
          <div className="logo">
            <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
          </div>
          <picture className='banner'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt="" />
          </picture>
          
          <form action="">
          <h2>Sign In</h2>
            <input type="text" placeholder='Enter name' />
            <input type="text" placeholder='Enter email' />
            <input type="text" placeholder='Enter password' />
            <button type='submit'>Sign In</button>
            <h4>Don't have an account? Signup </h4>
          </form>
        </div>
  </>
   
}

export default Login