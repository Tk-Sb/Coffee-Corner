import Background from "../background";
import NavBar from "../nav-bar";
import { MainText, SmallText, SubText } from "../text";

export default function HomeSection () {
  return (
    <>
      <Background>
        <div className={`w-full h-fit flex flex-wrap justify-end gap-4 md:gap-0  `}>
          <div className="w-full h-fit xl:w-fit flex-grow flex flex-col gap-2 lg:gap-4  ">
            <MainText className={`text-white `}>
              Welcome to <br />
              Coffee Corner café!
            </MainText>

            <SubText className={`text-white max-w-md md:max-w-2xl lg:max-w-4xl `}>
              were we believe in the power of a good cup of coffee and the joy of a freshly baked pastry.
            </SubText>
            
            <SmallText className={`text-[#D1CFCD] `}>
              To never miss our upcoming offers and events.
            </SmallText>
          </div>

          <div className={`w-fit h-fit translate-x-4 md:translate-x-6 lg:translate-x-12 `}>
            <img src="./cup.png" alt="coffee cup png" className={`w-[300px] h-[300px] md:w-[500px] md:h-[500px] `} />
          </div>
        </div>

        <div className={`w-full h-fit lg:w-1/2 flex justify-between items-center px-2 md:px-6 py-3 lg:py-6 border-[3px] border-white text-white `} >
          <div className={`min-w-fit flex flex-col justify-center items-center gap-2 md:gap-4 `}>
            <MainText>
              50+
            </MainText>
            <SmallText>
              Menu items
            </SmallText>
          </div>
          <div className={`min-w-fit flex flex-col justify-center items-center gap-2 `}>
            <MainText>
              20+
            </MainText>
            <SmallText>
              Running orders
            </SmallText>
          </div>
          <div className={`min-w-fit flex flex-col justify-center items-center gap-2 `}>
            <MainText>
              2k+
            </MainText>
            <SmallText>
              Happy customers
            </SmallText>
          </div>
        </div>
      </Background>
    </>
  )
}