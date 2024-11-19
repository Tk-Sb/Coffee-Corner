

export default function BackGround({ children, mainColor, secondColor }) {
  
  return (
    <>
      <div className={`w-full h-svh px-4 py-12 md:px-6 lg:px-12 `} >
        <BackGroundBlobs mainColor={mainColor} secondColor={secondColor} ></BackGroundBlobs>
        <BackGroundText secondColor={secondColor} ></BackGroundText>
        {children}
      </div>
    </>
  )
}

function BackGroundText ({ secondColor }) {
  return (
    <>
      <div className={`w-fit h-fit hidden md:block md:absolute bottom-0 right-0 text-9xl font-medium text-[${secondColor}] `} >
        Coffee <br /> Corner
      </div>
    </>
  )
}

function BackGroundBlobs ({ mainColor, secondColor }) {
  return (
    <>
      <div className={`w-full h-full flex flex-col justify-between absolute top-0 left-0 md:hidden bg-[${mainColor}] -z-10 `} >
        <div className="w-full h-fit flex justify-end ">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.103279 0C160.62 328.067 400 223.16 400 223.16V400C180.221 377.228 -5.00693 92.8766 0.103279 0Z" fill={secondColor} />
          </svg>
        </div>
        <div className="w-full h-fit flex justify-start">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M399.897 400C239.38 71.9326 0 176.84 0 176.84V0C219.779 22.7722 405.007 307.123 399.897 400Z" fill={secondColor}/>
          </svg>
        </div>
      </div>

      <div className={`w-full h-full md:flex flex-col justify-between absolute top-0 left-0 hidden bg-[${mainColor}] -z-10 `} >
        <div className="w-full h-[1px] flex justify-end ">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.103279 0C160.62 328.067 400 223.16 400 223.16V400C180.221 377.228 -5.00693 92.8766 0.103279 0Z" fill={secondColor}/>
          </svg>
        </div>
        <div className="w-full flex justify-start">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M399.897 400C239.38 71.9326 0 176.84 0 176.84V0C219.779 22.7722 405.007 307.123 399.897 400Z" fill={secondColor}/>
          </svg>
        </div>
      </div>
    </>
  )
}

