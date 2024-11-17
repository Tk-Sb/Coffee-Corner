

export default function BackGround() {
  
  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 bg-[#1B1107] -z-10 " >
        <BackGroundText></BackGroundText>
        <BackGroundBlobs></BackGroundBlobs>
      </div>
    </>
  )
}

function BackGroundText () {
  return (
    <>
      <div className="w-fit h-fit hidden md:block md:absolute bottom-64 right-0 text-9xl font-medium text-[#261D14] " >
        Coffee <br /> Corner
      </div>
    </>
  )
}

function BackGroundBlobs () {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between items-start md:hidden " >
        <div className="w-full flex justify-end ">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.103279 0C160.62 328.067 400 223.16 400 223.16V400C180.221 377.228 -5.00693 92.8766 0.103279 0Z" fill="#261D14"/>
          </svg>
        </div>
        <div className="w-full flex justify-start">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M399.897 400C239.38 71.9326 0 176.84 0 176.84V0C219.779 22.7722 405.007 307.123 399.897 400Z" fill="#261D14"/>
          </svg>
        </div>
      </div>

      <div className="w-fit h-fit hidden md:block absolute top-0 right-0 " >
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.103279 0C160.62 328.067 400 223.16 400 223.16V400C180.221 377.228 -5.00693 92.8766 0.103279 0Z" fill="#261D14"/>
        </svg>
      </div>
      <div className="w-fit h-fit hidden md:block absolute bottom-0 left-0 " >
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M399.897 400C239.38 71.9326 0 176.84 0 176.84V0C219.779 22.7722 405.007 307.123 399.897 400Z" fill="#261D14"/>
        </svg>
      </div>
    </>
  )
}

