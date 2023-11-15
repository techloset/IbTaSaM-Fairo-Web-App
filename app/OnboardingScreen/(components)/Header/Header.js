import Image from "next/image";
import fairo from "@/public/images/fairo.png";
import search from "@/public/svg/search.svg";
import user from "@/public/svg/user.svg";
import Link from "next/link";
export default function Header() {
  return (
    <div className="py-3 mb-5 md:mb-8 bg-white">
      <div className="max-w-[1320px] mx-auto px-7 flex justify-between items-center">
        <Link href="/" className="w-[71.08px] h-6">
          <Image src={fairo} alt="Fairo-Logo"/>
        </Link>
        <div className="w-[416px] h-12 bg-_grayborder border border-_grayborder md:flex items-center px-5 hidden md:ml-20">
          <Image src={search} alt="search"/>
          <input
            type="text"
            placeholder="Search"
            className="text-_grayColor text-sm font-normal  leading-[21px] outline-none bg-_grayborder placeholder:pl-1 w-[100%]"
          />
        </div>
        <div className="flex">
          <button className="w-14 h-10 px-4 py-2 bg-_grayborder justify-start items-start gap-2.5 inline-flex md:hidden mr-3">
            <div className="w-6 h-6 relative">
              <Image src={search} alt="search" width={50} />
            </div>
          </button>
          <button className="w-14 h-10 px-4 md:w-[145px] md:px-12 py-2 bg-_greenColor justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative md:hidden">
              <Image src={user} alt="user" width={50} />
            </div>
            <div className="text-center text-_lightGreenColor text-base font-normal  leading-normal hidden md:inline-flex">
              Sign in
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
