import LeftSidebar from "@/components/LeftSidebar";
import MainSection from "@/components/MainSection";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar/>
        <MainSection/>
      </div>
    </div>
  );
}
