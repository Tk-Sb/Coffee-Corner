export default function NavBar({ className }) {
  const sections = [
    { id: 1, name: "Home" },
    { id: 2, name: "Menu" },
    { id: 3, name: "About us" },
    { id: 4, name: "Contact us" }
  ]
  
  return (
    <>
      <div className={`w-full h-fit bg-black ${className}`}>
        {sections.map((section) => (
          <button key={section.id}>{section.name}</button>
        ))}
      </div>
    </>
  )
}