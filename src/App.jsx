import { useState } from "react";
import Form from "./component/form";
// import './App.css'

function App() {
  const [action, setAction] = useState("None");

  return (
  <>
  {action==="All"?<div className="flex w-full h-screen bg-slate-950">
  <div className="w-full flex items-center justify-center lg:w-1/2">
    <Form />
  </div>
  <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
    <div className="w-60 h-60 bg-gradient-to-tr from-blue-950 to-violet-700 rounded-full animate-spin"></div>
    <div className="w-full h-1/2 bottom-0 bg-white/10 backdrop-blur-lg absolute"></div>
  </div>
</div>
:
<div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-slate-950 to-blue-950 transition-transform">
  <div className="flex px-8 py-6 h-9 w-full justify-between items-center
  bg-white/4 backdrop-blur-sm border-b-2  border-white/10 shadow-lg p-6">
    <div>
      <img src="./src/assets/menu.svg" alt="" />
    </div>
    <div className="text-white">
      <img src="" alt="SUCCESS" />
    </div>
    <div>
      <button className="text-violet-500 text-base font-medium" onClick={()=>{setAction("All")}}>Sign In</button>
    </div>
  </div>

  <div className="flex flex-col mt-4 justify-between">
    <h1 className="text-6xl px-4 mt-12 text-yellow-50 text-center font-semibold z-50
    leading-tight tracking-tighter">Awaken your developer skills <br /> on a single collaborative <br /> plartform.</h1>
    <p className="px-4 text-center font-medium text-2xl mt-4 text-gray-300 z-50">Gain access to great people of goal <br /> driven mindset around the globe</p>
  </div>

  <div className="mt-0 h-fit absolute -z-2 top-48 right-36 animate-pulse">
    <img className="w-full h-56" src="./src/assets/ExciteDevelopers4-removebg-preview.png" alt="" />
  </div>
  <div className="mt-0 h-fit absolute -z-2 top-56 left-40 animate-pulse">
  <img className="w-full h-56" src="./src/assets/Developer-removebg-preview.png" alt="" />
</div>

<div className="mt-7 flex justify-center">
    <div className="flex gap-x-4">
    <button className="w-56 px-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out 
    transition-all py-2.5 rounded-xl bg-violet-500 text-white text-lg font-bold" onClick={()=>{setAction("All")}}>
      Sign Up
    </button>
    <button className="flex h-12 w-56 px-2 items-center justify-center gap-2 text-gray-100 border-2
    py-2 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
      <img src="./src/assets/google.svg" alt="google" className="w-10" />
      Continue with Google
    </button>
  </div>
</div>
  <div></div>
</div>
}

  </>
  );
}

export default App;
