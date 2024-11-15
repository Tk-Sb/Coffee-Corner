import BackGround from "../back-ground";
import NavBar from "../nav-bar";

export default function HomePage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between p-12 " >
        <NavBar></NavBar>

        <div className="w-full h-fit flex flex-col gap-2 " >
          <h1 className="text-white text-[64px] leading-[1.5] font-semibold " >
            Welcome to <br />
            Coffee Corner café!
          </h1>
          <h2 className="text-white text-3xl font-light " >
            were we believe in the power of a good cup of <br /> coffee and the joy of a freshly baked pastry.
          </h2>
          <h3 className="text-[#D1CFCD] text-base font-light" >
            To never miss our upcoming offers and events.
          </h3>
        </div>

        <div className="w-fit h-fit flex gap-24 items-center p-6 border-white border-[3px] " >
          <div className="w-fit h-fit flex flex-col gap-4 items-center " >
            <h1 className="text-white text-5xl " >
              50+
            </h1>
            <h2 className="text-[#D1CFCD] text-2xl " >
              Menu items
            </h2>
          </div>
          <div className="w-fit h-fit flex flex-col gap-4 items-center " >
            <h1 className="text-white text-5xl " >
              20+
            </h1>
            <h2 className="text-[#D1CFCD] text-2xl " >
              Running orders
            </h2>
          </div>
          <div className="w-fit h-fit flex flex-col gap-4 items-center " >
            <h1 className="text-white text-5xl " >
              2k+
            </h1>
            <h2 className="text-[#D1CFCD] text-2xl " >
              Happy customers
            </h2>
          </div>
        </div>

        <div className="w-fit h-fit absolute right-0 top-40 " >
          <img src="./cup.png" width={500} height={500} ></img>
        </div>

        <BackGround></BackGround>
      </div>
    </>
  )
}

