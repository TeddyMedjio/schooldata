import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        <Image src="/search.png" alt="icon search" width={14} height={14} />
        <input
          type="text"
          placeholder="search..."
          className=" outline-none w-[200px] p-2 bg-transparent"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="icon message" height={20} width={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/announcement.png"
            alt="icon announcement"
            height={20}
            width={20}
          />
          <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white text-xs bg-purple-500 rounded-full">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="icon avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
