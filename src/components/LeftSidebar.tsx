import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter } from "react-icons/bs";
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



const LeftSidebar = () => {
  return (
    <section className="md:m-2 py-2 fixed w-[60px] md:w-[272px] flex flex-col h-screen justify-between gap-2">
        <div>
            <Link href={'/'} className="hover:text-blue-400 md:text-2xl text-4xl rounded-full p-4 flex items-center md:justify-start justify-center"><BsTwitter/></Link>
            {
            NAVIGATIONS_ITEMS.map((item)=>(
                <Link className="hover:bg-white/10 hover:text-blue-400 transition-all text-2xl rounded-full p-4 flex items-center md:justify-start justify-center space-x-2 w-full" href={`/${item.title.toLowerCase()}`} key={item.title}>
                <div>
                    <item.icon/>
                </div>
                <div className="hidden md:block">
                    {item.title}
                </div>
                </Link>
            ))
            }
            <button className="text-2xl font-semibold w-full rounded-full bg-blue-500 hover:bg-opacity-90 py-4 px-6 hidden md:block">
                Tweet
            </button>
        </div>
        <button className="rounded-full flex items-center space-x-2 mb-2 md:p-2 text-center md:hover:bg-white/15 transition w-full justify-between">
            <div className="rounded-full min-w-10 min-h-10 ml-2 md:ml-0 bg-slate-400"></div>
            <div className="flex flex-col p-1 text-sm">
            <div className="font-semibold hidden md:block">Hamim Rahman</div>
            <div className="hidden md:block">@hamimrahman.com</div>
            </div>
            <div className="hidden md:block"><BsThreeDots/></div>
        </button>
    </section>
  )
}

export default LeftSidebar