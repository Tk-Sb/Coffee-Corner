import { MainText, SmallText, SubText } from "../text";

export default function HomeSection () {
  return (
    <>
      <MainText className={` `}>
        Welcome to <br />
        Coffee Corner café!
      </MainText>

      <SubText className={`max-w-md md:max-w-2xl lg:max-w-4xl `}>
        were we believe in the power of a good cup of coffee and the joy of a freshly baked pastry.
      </SubText>
      
      <SmallText className={` `}>
        To never miss our upcoming offers and events.
      </SmallText>
    </>
  )
}