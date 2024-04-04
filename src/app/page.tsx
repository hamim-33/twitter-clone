import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATIONS_ITEMS = [
  {
    title:"Home",
    icon: BiHomeCircle
  },
  {
    title:"Explore",
    icon: HiOutlineHashtag
  },
  {
    title:"Notifications",
    icon: BsBell
  },
  {
    title:"Messages",
    icon: BsEnvelope
  },
  {
    title:"Bookmarks",
    icon: BsBookmark
  },
  {
    title:"Profile",
    icon: BiUser
  }
]


export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="mt-2 mx-1 fixed w-[60px] md:w-72 flex flex-col h-screen justify-between gap-2">
          <div>
            <Link className="text-3xl text-blue-500 mt-2 hover:text-blue-400" href={'/'}><BsTwitter/></Link>
            {
              NAVIGATIONS_ITEMS.map((item)=>(
                <Link className="hover:bg-white/10 transition-all text-2xl rounded-full p-[18px] flex items-center md:justify-start justify-center space-x-2 w-full" href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon/>
                  </div>
                  <div className="hidden md:block">
                    {item.title}
                  </div>
                </Link>
              ))
            }
            <button className="w-full rounded-full bg-blue-500 hover:bg-blue-400 py-4 px-6 hidden md:block">
              Tweet
            </button>
          </div>
          <div>
            at the bottom
          </div>
        </section>
        {/* <main>Middle Section</main>
        <section>Right Section</section> */}
      </div>
    </div>
  );
}
