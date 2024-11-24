import NavBar from "@/components/nav-bar";
import HomeSection from "@/components/pages/home";

export default function Home() {
  return (
    <>
      <div className="w-full fixed px-4 md:px-6 lg:px-12 pt-12 z-50 ">
        <NavBar className={`text-white`}></NavBar>
      </div>
      <HomeSection></HomeSection>
    </>
  );
}
