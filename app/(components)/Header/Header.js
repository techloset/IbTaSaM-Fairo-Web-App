import Image from "next/image";
import fairo from "@/public/images/fairo.png";
import search from "@/public/svg/search.svg";
import arrow from "@/public/svg/arrow_drop_down.svg";
import Link from "next/link";
import imghead from "@/public/images/ProfilePic1.jpg";
export default function Header() {
  return (
    <div className="py-3 mb-5 md:mb-8 bg-white">
      <div className="max-w-[1320px] mx-auto px-7 flex justify-between items-center">
        <Link href="/" className="w-[71.08px] h-6">
          <Image src={fairo} alt="Logo" />
        </Link>
        <div className="w-[416px] h-12 bg-gray-100 border border-gray-100 md:flex items-center px-5 hidden md:ml-32">
          <Image src={search} alt="search" />
          <input
            type="text"
            placeholder="Search"
            className="text-gray-400 text-sm font-normal font-['Aeonik'] leading-[21px] outline-none bg-gray-100 placeholder:pl-1 w-[100%]"
          />
        </div>
        <div className="flex md:hidden">
          <div className="w-14 h-10 px-4 py-2 bg-gray-100 justify-start items-start gap-2.5 inline-flex md:hidden mr-3">
            <div className="w-6 h-6 relative">
              <Image src={search} width={50} alt="search" />
            </div>
          </div>
          <div className="w-10 h-10 justify-center items-center inline-flex">
            <Image
              src={imghead}
              alt="imgHead"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
        <div className="w-[185px] h-10 p-1 bg-slate-50 flex-col justify-start items-start gap-2.5 hidden md:inline-flex">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="justify-start items-center gap-4 flex">
              <div className="w-5 h-5 relative">
                <Image src={arrow} alt="arrow-down" />
              </div>
              <div className="text-gray-800 text-base font-normal font-['Aeonik'] flex-shrink-0">
                Jane Sullivan
              </div>
            </div>
            <div className="w-8 h-8 justify-center items-center flex">
              <Image
                src={imghead}
                alt="head-Image"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
