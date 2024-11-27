import NavBar from "@/components/nav-bar";
import HomeSection from "@/components/pages/home";
import MenuSection from "@/components/pages/menu";

export default function Home() {
  return (
    <>
      <div className="w-full fixed px-4 md:px-6 lg:px-12 pt-12 z-50 ">
        <NavBar className={`text-white backdrop-blur-lg `}></NavBar>
      </div>
      <HomeSection></HomeSection>
      <MenuSection></MenuSection>
    </>
  );
}
