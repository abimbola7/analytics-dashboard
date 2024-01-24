import Image from "next/image";
import SideBar from "./(components)/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen w-full">
      <SideBar/>
      <div className="w-full">

      </div>
    </div>
  );
}
