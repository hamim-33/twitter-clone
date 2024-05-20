import LeftSidebar from "@/components/LeftSidebar";
import MainSection from "@/components/MainSection";
import RightSidebar from "@/components/RightSidebar";
export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <MainSection />
        <RightSidebar />
      </div>
    </div>
  );
}
