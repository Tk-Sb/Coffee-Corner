import BackGround from "../back-ground";
import NavBar from "../nav-bar";

export default function HomeSection() {
  return (
    <>
      <div className="w-full h-svh px-4 py-12 md:px-6 lg:px-12 flex flex-col justify-between items-end lg:items-start overflow-scroll lg:overflow-auto ">
        <NavBar></NavBar>
        <div className="w-full h-fit flex flex-col gap-2 md:gap-4 " >
          <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-semibold " >
            Welcome to <br />
            Coffee Corner café!
          </h1>
          <h2 className="text-white text-sm md:text-2xl lg:text-3xl font-light lg:w-[750px] " >
            were we believe in the power of a good cup of coffee and the joy of a freshly baked pastry.
          </h2>
          <h3 className="text-[#D1CFCD] text-xs lg:text-sm font-light" >
            To never miss our upcoming offers and events.
          </h3>
        </div>
        <div className="w-fit h-fit translate-x-4 md:translate-x-6 lg:translate-x-0 lg:absolute right-0 top-52 " >
          <img src="./cup.png" width={300} height={300} className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] " ></img>
        </div>

        <div className="w-[50%] h-fit flex items-center justify-between p-2 border-white border-[3px] " >
          <div className="w-fit h-fit flex flex-col gap-2 items-center " >
            <h1 className="text-white text-2xl md:text-5xl font-light " >
              50+
            </h1>
            <h2 className="text-[#D1CFCD] text-xs md:text-2xl " >
              Menu items
            </h2>
          </div>
          <div className="w-fit h-fit flex flex-col gap-2 items-center " >
            <h1 className="text-white text-2xl md:text-5xl font-light " >
              20+
            </h1>
            <h2 className="text-[#D1CFCD] text-xs md:text-2xl " >
              Running orders
            </h2>
          </div>
          <div className="w-fit h-fit flex flex-col gap-2 items-center " >
            <h1 className="text-white text-2xl md:text-5xl font-light " >
              2k+
            </h1>
            <h2 className="text-[#D1CFCD] text-xs md:text-2xl " >
              Happy customers
            </h2>
          </div>
        </div>
        <BackGround></BackGround>
      </div>
    </>
  )
}