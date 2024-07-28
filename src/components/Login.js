import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

const toggleSignInForm = ()=>{
  setIsSignInForm(!isSignInForm)
}


  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg' alt='poster'/>
      </div>
      <form className='absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
      <h1 className='font-bold tex-xl py-4'>{isSignInForm ? "Sign in ": "Sign Up"}</h1>
        <input type='text' placeholder='Email' className='p-4 my-2 w-full bg-gray-700'/>
        {
          isSignInForm &&
          <input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700'/>
        }
       

        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700'/>


        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign in ": "Sign Up"}</button>
<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
{isSignInForm ? "New to Netflix? Sign Up Now": "Already registered? Sign In Now"}
  </p>
      </form>
      </div>
  )
}

export default Login