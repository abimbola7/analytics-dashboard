import Image from "next/image";
import SideBar from "./(components)/sidebar";
import Header from "./(components)/header";
import FirstSection from "./(components)/firstsection";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen w-full">
      <SideBar/>
      <div className="w-full bg-[#f9f9f9]">
        <Header />
        <main>
          <FirstSection />
        </main>
      </div>
    </div>
  );
}
