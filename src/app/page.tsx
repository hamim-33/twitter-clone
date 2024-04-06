import LeftSidebar from "@/components/LeftSidebar";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <LeftSidebar/>
        <main className="py-4 ml-16 md:ml-72 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-2xl py-4 font-bold px-4 backdrop-blur backdrop:bg-black/20 sticky top-0">Home</h1>
          <div className="min-w-full border-t-[0.5px] border-b-[0.5px] border-gray-500 relative flex">
            <div className="h-10 min-w-10 rounded-full mx-2 my-4 bg-slate-400"></div>
            <div className="border-l-[0.5px] border-gray-500 px-2 flex flex-col h-full w-full justify-between">
              <div className="py-4 min-w-screen overflow-visible">
                <input type="text" placeholder="Write Something" maxLength={240} className=" placeholder:text-2xl placeholder:text-gray-500 w-full h-full bg-transparent outline-none text-xl text-gray-300"/>
              </div>
              <div className="border-t-[0.5px] border-gray-500 w-full justify-between items-center flex mt-4 p-2">
                <div>Hello</div>
                <div><button className="rounded-full bg-blue-500 transition-all hover:bg-opacity-90 p-2 font-bold text-lg">Tweet</button></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_,i)=>(
                <div key={i} className="border-b-[0.5px] border-gray-500 flex space-x-4">
                  <div className="p-2 mt-2">
                    <div
                      className="w-10 h-10 rounded-full bg-slate-400"
                    />
                  </div>
                  <div className="flex flex-col pr-2 pt-2 pb-2">
                    <div className="flex items-center justify-between my-2">
                      <div className="flex items-center space-x-2">
                        <div className=" font-bold">Hamim Rahman</div>
                        <div className=" text-gray-400">@hamimrahman</div>
                        <div className="text-gray-400">1hour ago</div>
                        <div><BsDot/></div>
                      </div>
                      <div className="rounded-full hover:bg-white/15 hover:text-blue-400 p-2 cursor-pointer"><BsThreeDots/></div>
                    </div>
                    <div className="text-white text-base my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis reiciendis libero culpa fuga unde sequi maiores. Vero deleniti eveniet nesciunt reiciendis earum aperiam aliquam autem provident error. Numquam tenetur id quod voluptate, dolorem aperiam praesentium molestiae, distinctio iste enim voluptatum, dolores iusto ex! Cupiditate laborum, ipsa at necessitatibus sed libero architecto sapiente incidunt odit voluptatem totam quod vel saepe voluptate consequuntur, a, ab laboriosam ipsam aperiam debitis. Iste rerum totam cum expedita saepe corrupti, unde rem consequatur in porro nemo iusto laborum pariatur officiis tempora illum eius recusandae aperiam nam accusantium dolorem! Illum iure voluptas id eum, natus omnis!</div>
                    <div className="bg-gray-400 aspect-square w-full h-96 rounded-xl my-2"></div>
                    <div className="flex items-center justify-evenly space-x-12 w-full my-2">
                      <div className="rounded-full hover:bg-white/15 hover:text-red-500 transition-all p-2 cursor-pointer"><BsChat/></div>
                      <div className="rounded-full hover:bg-white/15 hover:text-red-500 transition-all p-2 cursor-pointer"><AiOutlineRetweet/></div>
                      <div className="rounded-full hover:bg-white/15 hover:text-red-500 transition-all p-2 cursor-pointer"><AiOutlineHeart/></div>
                      <div className="rounded-full hover:bg-white/15 hover:text-red-500 transition-all p-2 cursor-pointer"><IoStatsChart/></div>
                      <div className="rounded-full hover:bg-white/15 hover:text-red-500 transition-all p-2 cursor-pointer"><IoShareOutline/></div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
      </div>
    </div>
  );
}
