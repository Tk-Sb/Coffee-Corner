'use client'

import { useState } from "react"



export default function NavBar () {
  const [isPressed, setIsPressed] = useState("1")

  return (
    <>
      <div className="w-full h-fit flex justify-between items-center px-6 py-4 border-white border-[3px] " >
        <h1 className="w-fit h-fit text-white text-2xl  font-medium select-none " >
          Coffee Corner
        </h1>
        <div>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.375 7.875H23.625M4.375 14H23.625M4.375 20.125H23.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <nav className="w-[50%] h-fit flex justify-between text-white text-base font-medium hidden " >
          <button onClick={() => setIsPressed("1")} className={`${isPressed === '1' ? 'underline underline-offset-8' : '' }`} >
            Home
          </button>

          <button onClick={() => setIsPressed("2")} className={`${isPressed === '2' ? 'underline underline-offset-8' : '' }`} >
            Menu
          </button>

          <button onClick={() => setIsPressed("3")} className={`${isPressed === '3' ? 'underline underline-offset-8' : '' }`} >            
            About us
          </button>

          <button onClick={() => setIsPressed("4")} className={`${isPressed === '4' ? 'underline underline-offset-8' : '' }`} >
            Contacts
          </button>
        </nav>
      </div>
    </>
    )
  }