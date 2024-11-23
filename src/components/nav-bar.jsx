'use client'

import { useState } from "react"
import { SubText } from "./text"

export default function NavBar({ className }) {
  const sections = [
    { id: "1", name: "Home" },
    { id: "2", name: "Menu" },
    { id: "3", name: "About us" },
    { id: "4", name: "Contact us" }
  ]

  const [selectedSection, setSelectedSection] = useState("1")
  
  return (
    <>
      <div className={`w-full h-fit flex justify-between items-center px-5 md:px-6 py-4 border-[3px] ${className}`}>
        <SubText className={"font-semibold select-none "} >
          Coffee Corner
        </SubText>
        <button className={`lg:hidden `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className={`w-1/2 h-fit hidden lg:flex justify-between text-xl `}>
          {sections.map((section) => (
            <button key={section.id} className={`${selectedSection === section.id ? 'underline decoration-[3px] underline-offset-[5px]' : ''} `} onClick={() => setSelectedSection(section.id)} >{section.name}</button>
          ))}
        </div>
      </div>
    </>
  )
}