import Background from "../background";
import { MainText, SmallText, SubText } from "../text";

export default function MenuSection() {
  return (
    <>
      <Background mainColor={"#EFDFC5"} secondColor={"#D6C5AA"} >
        <div className={`w-full h-fit flex flex-col gap-8 md:gap-12 `}>
          <MainText className={` `}>
            Best sellers
          </MainText>
          <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-10  ">
            <MenuFrame imgUrl={"./menu/cappuccino.jpg"} name={"Cappuccino"} description={"A perfect balance of espresso, steamed milk, and foam."} price={"Price: $3.50"} ></MenuFrame>
            <MenuFrame imgUrl={"./menu/americano.jpg"} name={"Americano"} description={"A strong, robust coffee for those who love the pure taste of espresso."} price={"Price: $3.00"} ></MenuFrame>
            <MenuFrame imgUrl={"./menu/mocha.jpg"} name={"Cappuccino"} description={"A delicious combination of espresso, steamed milk, and rich chocolate syrup."} price={"Price: $4.00"} ></MenuFrame>
          </div>
        </div>
      </Background>
    </>
  )
}

function MenuFrame ({ imgUrl, name, description, price }) {
  return (
    <>
      <div className="w-full md:h-[500px] lg:h-[550px] max-w-80 md:max-w-96 lg:max-w-[400px] p-12 pb-8 relative bg-[#C7AC8F] " >
        <svg className="absolute top-0 left-0 " viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47716 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V240C40 245.523 35.5228 250 30 250H10C4.47715 250 0 245.523 0 240V10Z" fill="#2D1D13"/>
          <path d="M360 10C360 4.47716 364.477 0 370 0H390C395.523 0 400 4.47715 400 10V240C400 245.523 395.523 250 390 250H370C364.477 250 360 245.523 360 240V10Z" fill="#2D1D13"/>
          <path d="M0 40.0304V0.0303955L400 2.80857e-05V40L0 40.0304Z" fill="#2D1D13"/>
        </svg>
        <img src={imgUrl} alt="coffee pic" className="w-full aspect-square mb-2 " />
        <div className="w-full h-fit flex flex-col items-center gap-1 ">
          <SubText className={"font-semibold "}>
            {name}
          </SubText>
          <SmallText className={`break-words text-center `} >
            {description}
          </SmallText>
          <SubText className={"font-semibold"}>
            {price}
          </SubText>
        </div>
      </div>
    </>
  )
}