function MainText ({ children, className }) {
  return (
    <>
      <h1 className={`text-2xl md:text-4xl lg:text-6xl font-semibold  ${className}`} >
        {children}
      </h1>
    </>
  )
}

function SubText ({ children, className }) {
  return (
    <>
      <h2 className={`text-base md:text-2xl lg:text-4xl font-light  ${className}`} >
        {children}
      </h2>
    </>
  )
}

function SmallText ({ children, className }) {
  return (
    <>
      <h3 className={`text-xs md:text-sm lg:text-base font-light  ${className}`} >
        {children}
      </h3>
    </>
  )
}

export { MainText, SubText, SmallText }