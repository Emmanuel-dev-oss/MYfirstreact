import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import React, { useState } from 'react'

function Form() {

  const [action,setAction] = useState("Sign Up");
  
    const [show, setShow] = useState(false)
    
          const handleClick = () => {
            setShow(!show)
          }

  return (
    <div className="bg-alate-950 px-10 py-3 rounded-3xl border-2 transform-gpu">

      {action==="Sign Up"?<h1 className="text-3xl rounded-xl font-semibold text-white">Welcome To Success <span className="text-violet-500 text-base font-medium ml-2 cursor-pointer" 
      onClick={()=>{setAction("Sign In")}}>Sign In</span></h1>:<h1 className="text-5xl text-white text-center bg-gradient-to-tr from-slate-950 to-violet-900 
      text-clip text-centeralign-middle opacity-80 rounded-xl font-semibold">Welcome Back</h1>}
      
      {action==="Sign Up"?<p className="font-medium text-lg mt-1 text-gray-300 ml-10" >Let's start the journey together!!!</p>:
      <p className="font-medium text-lg mt-4 text-gray-300">Welcome back! please enter your details</p>}

      <div className="mt-4">
        {action==="Sign In"?<div></div>:
         <div>
         <label className="text-lg font-medium text-gray-400" htmlFor="">Username:</label>
         <input type="text" className="w-full text-white border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          placeholder="Create a Username" />
       </div>}
        <div className='mt-3'>
          <label className="text-lg font-medium text-gray-400" htmlFor="">Email:</label>
          <input type="email" className="w-full text-white border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter your email" />
        </div>
        <div className="mt-3">
           <label className="text-lg font-medium rounded-xl text-gray-400" htmlFor="">Password:</label>
           <div className="flex items-center w-46 bg-red-900 rounded-xl mt-1">
              <input type={show ? "text":"password"} className="w-full pr-[50px] text-white border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your password" />
              <p className="text-white ml-[-5vh] cursor-pointer" onClick={handleClick}>{show ? <FiEyeOff></FiEyeOff>:<FiEye></FiEye>}</p>
           </div>
        </div>

         {action==="Sign Up"?<div></div>:
        <div className='flex mt-3 justify-between items-center'> 
          <div>
          <input type="checkbox" id="remember"/>
          <label className="ml-2 font-medium text-base text-white" htmlFor="remember">Remember for 30 days</label>
          </div>
          <button className="font-medium text-base text-violet-500"> Forget password </button>
        </div>}

        <div className="mt-7 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out 
          transition-all py-2.5 rounded-xl bg-violet-500 text-white text-lg font-bold">{action}</button>

          {action==="Sign In"?
          <button className="flex items-center justify-center gap-2 text-gray-100 border-2
           py-2 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
            <img src="./src/assets/passkey2.svg" alt="google" className="w-10" />
            Sign In With a passkey
          </button>
          :
          <button className="flex h-12 items-center justify-center gap-2 text-gray-100 border-2
           py-2 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
            <img src="./src/assets/google.svg" alt="google" className="w-10" />
            Continue with Google
          </button>}
        </div>
        <div className="mt-3 flex justify-center items-center text-center">
          {action==="Sign Up"?<p className="from-neutral-200 text-base text-yellow-50">
            The email you have provided is already <br /> associated with an account
            <span className="text-violet-500 text-base font-medium ml-2 cursor-pointer" onClick={()=>{setAction("Sign In")}}>Sign In</span> or 
            <br />
            <span className="text-violet-500 text-base font-medium ml-2 cursor-pointer">Reset Password</span>
          </p>:
          <p className="font-medium text-base text-yellow-50">Don't have an account?</p>}

          {action==="Sign Up"?<button></button>:
          <button className="text-violet-500 text-base font-medium ml-2"  
          onClick={()=>{setAction("Sign Up")}}>Sign Up</button>}
        </div>
      </div>
    </div>
  );
}

export default Form;