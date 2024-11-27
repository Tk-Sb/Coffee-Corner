import Background from "../background";
import { MainText, SubText } from "../text";

export default function MenuSection () {
  return (
    <>
      <Background mainColor={"#BAA17C"} secondColor={"#C8B9A0"} >
        <div className={`w-full h-fit flex flex-col gap-8 md:gap-12 `}>
          <MainText className={`text-black `}>
            About Coffee Corner
          </MainText>
          
          <div className={`w-full h-fit flex flex-col lg:flex-row justify-center items-center `}>
            <div className={`w-full h-fit flex lg:flex-col justify-start items-center gap-4 `} >
              <img src="./one.png" alt="" className={`w-[150px] md:w-[200px] lg:w-[250px] `} />
              <div className={`flex flex-col lg:text-center gap-2 `}>
                <MainText className={`text-black `}>
                  Our Story
                </MainText>
                <SubText className={`text-black `}>
                  Find out about our start and growth.
                </SubText>
              </div>
            </div>
            <div className={`w-full h-fit flex lg:flex-col-reverse flex-row-reverse justify-start items-center gap-4 `} >
              <img src="./two.png" alt="" className={`w-[150px] md:w-[200px] lg:w-[250px] `} />
              <div className={`flex flex-col text-right lg:text-center gap-2 `}>
                <MainText className={`text-black `}>
                  Our Team
                </MainText>
                <SubText className={`text-black `}>
                  Meet our lovely and welcoming team.
                </SubText>
              </div>
            </div>
            <div className={`w-full h-fit flex lg:flex-col justify-start items-center gap-4 `} >
              <img src="./three.png" alt="" className={`w-[150px] md:w-[200px] lg:w-[250px] `} />
              <div className={`flex flex-col lg:text-center gap-2 `}>
                <MainText className={`text-black `}>
                  Our Coffee
                </MainText>
                <SubText className={`text-black `}>
                  How we intend to make a better coffee for the lovers.
                </SubText>
              </div>
            </div>
          </div>
        </div>
      </Background>
    </>
  )
}