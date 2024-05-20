import { BsSearch } from "react-icons/bs";

export default function RightSidebar() {
  return (
    <section className="absolute top-0 flex flex-col space-y-4 invisible xl:visible right-0">
      <div>
        <div className=" relative w-full h-full mt-4">
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center"
          >
            <BsSearch className="w-5 h-5 text-gray-500" />
          </label>
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="p-2 outline-none bg-neutral-800 border-none w-full h-full rounded-xl py-4 px-6"
          />
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3
          className="font-bold text-xl p-4
            "
        >
          What's Happening
        </h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 last:rounded-b-xl transition"
            >
              <div className="font-bold text-lg">#trending {i + 1}</div>
              <div className="text-sm text-neutral-400">35.8k</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3
          className="font-bold text-xl p-4
            "
        >
          Who to follow
        </h3>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="space-x-2 hover:bg-white/10 p-4 last:rounded-b-xl transition flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-600"></div>
              <div className="flex flex-col">
                <div className="font-bold text-white">Other user</div>
                <div className="text-sm text-gray-500">@otheruser1234</div>
              </div>
              <div>
                <button className="rounded-full px-4 py-2 bg-white text-neutral-950">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
