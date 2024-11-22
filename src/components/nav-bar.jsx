'use client'

import { useState } from "react"

export default function NavBar ({ color }) {
  const [isPressed, setIsPressed] = useState("1")

  return (
    <>
      <div style={{border: 'solid', color}} className={`w-full h-fit flex justify-between items-center px-5 md:px-6 py-4 border-[3px] `} >
        <h1 style={{color: color}} className={`w-fit h-fit text-2xl md:text-3xl lg:text-5xl font-medium select-none `} >
          Coffee Corner
        </h1>
        <div className="md:hidden">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.375 7.875H23.625M4.375 14H23.625M4.375 20.125H23.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <nav style={{color: color}} className={`w-[50%] h-fit md:flex justify-between text-base lg:text-2xl font-medium hidden `} >
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