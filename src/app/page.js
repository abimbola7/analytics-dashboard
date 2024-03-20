import Image from "next/image";
import SideBar from "./(components)/sidebar";
import Header from "./(components)/header";
import FirstSection from "./(components)/firstsection";
import SecondSection from "./(components)/secondsection";

export default function Home() {
  return (
    <div className="flex flex-row w-full min-h-screen transition-all duration-500">
      <SideBar className={"hidden md:flex"}/>
      <div className="w-full bg-[#f9f9f9] bg-accent">
        <Header />
        <main className="p-4">
          <FirstSection />
          <SecondSection />
        </main>
      </div>
    </div>
  );
}
