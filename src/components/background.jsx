
export default function Background ({ children }) {
  return (
    <>
      <div className={`w-full h-fit px-4 md:px-6 lg:px-12 pb-12 pt-32 md:pt-40 lg:pt-40 relative bg-[#1B1107] overflow-hidden `} >
        <svg className="hidden md:block absolute top-0 right-0 " width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.103279 0C160.62 328.067 400 223.16 400 223.16V400C180.221 377.228 -5.00693 92.8766 0.103279 0Z" fill="#261D14"/>
        </svg>
        <svg className="hidden md:block absolute bottom-0 left-0 " width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M399.897 400C239.38 71.9326 0 176.84 0 176.84V0C219.779 22.7722 405.007 307.123 399.897 400Z" fill="#261D14"/>
        </svg>

        <svg className="md:hidden absolute top-0 right-0 " width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0774595 0C120.465 246.051 300 167.37 300 167.37V300C135.166 282.921 -3.7552 69.6574 0.0774595 0Z" fill="#261D14"/>
        </svg>
        <svg className="md:hidden absolute bottom-0 left-0 " width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M299.923 300C179.535 53.9494 0 132.63 0 132.63V0C164.834 17.0791 303.755 230.343 299.923 300Z" fill="#261D14"/>
        </svg>

        <div className={`w-full h-full flex flex-col gap-4 relative `}>
          {children}
        </div>
      </div>
    </>
  )
}