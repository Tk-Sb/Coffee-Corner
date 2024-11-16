import BackGround from "../back-ground";
import NavBar from "../nav-bar";

export default function HomePage() {
  return (
    <>
      <div className="w-screen h-screen px-4 py-12 flex flex-col justify-between items-end " >
        <div className="w-fit h-fit flex flex-col gap-12 " >
          <NavBar></NavBar>
          <div className="w-full h-fit flex flex-col gap-2 " >
            <h1 className="text-white text-2xl font-semibold " >
              Welcome to <br />
              Coffee Corner café!
            </h1>
            <h2 className="text-white text-base font-light " >
              were we believe in the power of a good cup of coffee and the joy of a freshly baked pastry.
            </h2>
            <h3 className="text-[#D1CFCD] text-xs font-light" >
              To never miss our upcoming offers and events.
            </h3>
          </div>
        </div>

        <div className="w-fit h-fit translate-x-4 " >
          <img src="./cup.png" width={300} height={300} ></img>
        </div>

        <div className="w-full h-fit flex items-center justify-between p-2 border-white border-[3px] " >
          <div className="w-fit h-fit flex flex-col gap-2 items-center " >
            <h1 className="text-white text-2xl font-light " >
              50+
            </h1>
            <h2 className="text-[#D1CFCD] text-xs " >
              Menu items
            </h2>
          </div>
          <div className="w-fit h-fit flex flex-col gap-2 items-center " >
            <h1 className="text-white text-2xl font-light " >
              20+
            </h1>
            <h2 className="text-[#D1CFCD] text-xs " >
              Running orders
            </h2>
          </div>
          <div className="w-fit h-fit flex flex-col gap-2 items-center " >
            <h1 className="text-white text-2xl font-light " >
              2k+
            </h1>
            <h2 className="text-[#D1CFCD] text-xs " >
              Happy customers
            </h2>
          </div>
        </div>

        <BackGround></BackGround>
      </div>
    </>
  )
}

