
export default function Background ({ children }) {
  return (
    <>
      <div className={`w-full h-svh relative bg-[#1B1107] overflow-hidden `} >
        <svg className="absolute top-0 right-0 " width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.103279 0C160.62 328.067 400 223.16 400 223.16V400C180.221 377.228 -5.00693 92.8766 0.103279 0Z" fill="#261D14"/>
        </svg>
        <svg className="absolute bottom-0 left-0 " width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M399.897 400C239.38 71.9326 0 176.84 0 176.84V0C219.779 22.7722 405.007 307.123 399.897 400Z" fill="#261D14"/>
        </svg>

        <div>

        </div>

        <div className={`relative `}>
          {children}
        </div>
      </div>
    </>
  )
}