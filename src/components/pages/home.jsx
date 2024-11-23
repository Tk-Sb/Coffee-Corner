import Background from "../background";
import NavBar from "../nav-bar";
import { MainText, SmallText, SubText } from "../text";

export default function HomeSection () {
  return (
    <>
      <Background>
        <NavBar className={`text-white border-white `}></NavBar>
        
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
      </Background>
    </>
  )
}