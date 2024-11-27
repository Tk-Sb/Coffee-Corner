'use client'

import { useRef } from "react";
import Background from "../background";
import { MainText, SubText } from "../text";
import { useInView, motion } from "framer-motion";

export default function MenuSection () {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: "all",
    margin: "250px",
    once: true
  })

  return (
    <>
      <Background mainColor={"#BAA17C"} secondColor={"#C8B9A0"} >
        <div className={`w-full h-fit flex flex-col gap-8 md:gap-12 `}>
          <MainText className={`text-black `}>
            About Coffee Corner
          </MainText>
          
          <div ref={ref} className={`w-full h-fit flex flex-col lg:flex-row justify-center items-center `} >
            <motion.div
              className={`w-full h-fit flex lg:flex-col justify-start items-center gap-4 `} 
              animate={{
                x: isInView ? '0%' : '-200%'
              }}
              transition={{  
                duration: 1,                  // Animation duration (in seconds)  
                ease: [0.6, 0.05, -0.01, 1] // Custom easing curve  
                // You can also use predefined easing such as "easeIn", "easeOut", etc.  
              }}
              >
              <img src="./one.png" alt="" className={`w-[150px] md:w-[200px] lg:w-[250px] `} />
              <div className={`flex flex-col lg:text-center gap-2 `}>
                <MainText className={`text-black `}>
                  Our Story
                </MainText>
                <SubText className={`text-black `}>
                  Find out about our start and growth.
                </SubText>
              </div>
            </motion.div>
            <motion.div 
              className={`w-full h-fit flex lg:flex-col-reverse flex-row-reverse justify-start items-center gap-4 `} 
              animate={{
                y: isInView ? '0%' : '200%'
              }}
              transition={{  
                duration: 1.5,                  // Animation duration (in seconds)  
                ease: [0.6, 0.05, -0.01, 1] // Custom easing curve  
                // You can also use predefined easing such as "easeIn", "easeOut", etc.  
              }}
              >
              <img src="./two.png" alt="" className={`w-[150px] md:w-[200px] lg:w-[250px] `} />
              <div className={`flex flex-col text-right lg:text-center gap-2 `}>
                <MainText className={`text-black `}>
                  Our Team
                </MainText>
                <SubText className={`text-black `}>
                  Meet our lovely and welcoming team.
                </SubText>
              </div>
            </motion.div>
            <motion.div 
              className={`w-full h-fit flex lg:flex-col justify-start items-center gap-4 `} 
              animate={{
                x: isInView ? '0%' : '200%'
              }}
              transition={{  
                duration: 2,                  // Animation duration (in seconds)  
                ease: [0.6, 0.05, -0.01, 1] // Custom easing curve  
                // You can also use predefined easing such as "easeIn", "easeOut", etc.  
              }}
              >
              <img src="./three.png" alt="" className={`w-[150px] md:w-[200px] lg:w-[250px] `} />
              <div className={`flex flex-col lg:text-center gap-2 `}>
                <MainText className={`text-black `}>
                  Our Coffee
                </MainText>
                <SubText className={`text-black `}>
                  How we intend to make a better coffee for the lovers.
                </SubText>
              </div>
            </motion.div>
          </div>
        </div>
      </Background>
    </>
  )
}