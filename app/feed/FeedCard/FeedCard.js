import Image from "next/image";
import img from "@/public/images/coolman-images/ProfilePic.jpg";
import imghash from "@/public/svg/hash.svg";

export default function FeedCard(props) {
  return (
    <div className="w-full md:h-[246px] bg-white p-6 mb-5">
      <div className="flex items-center gap-3">
        <Image src={img} alt="First" />
        <div className={`text-black text-2xl font-bold`}>ajt</div>
        <div className="w-32 h-[26px] px-2 py-1 bg-_grayborder justify-start items-center gap-1 inline-flex">
          <div className="text-_verificationCOlor text-[12px] font-[700]  leading-[18px]">
            Pending verification
          </div>
        </div>
      </div>
      <div className="text-_graydark text-[14px] font-[400] leading-[21px] my-6">
        <span className="block mb-2">
          The fates have decided 0xfa5d05df712b059b74ccefe4084785be7f2ea1b8
          shall receive the Ancient Gutter Color Illuminary.
        </span>
        <span className="md:block">
          https://opensea.io/ assets/0x50b4a624b297198debedf908940f7aacfba6
          0180/21
        </span>
        <span className="block mt-2">🔺gang gang🔺 @everyone</span>
      </div>
      <div
        className={`w-full md:w-[668px] px-1 md:px-2 py-1 bg-slate-800 justify-start items-start gap-2.5 md:mt-8 ${props.divFirst}`}
      >
        <div className="justify-start items-center gap-1 flex">
          <Image src={imghash} alt="Hash" className="w-2 md:w-4" />
          <p className="text-_paratColor text-[11px] md:text-[18px] font-[500] leading-[27px]">
            5ff753461923d3aaf99fa70e60d2f0d4bf8103383efcc539c91a
          </p>
        </div>
      </div>
      <div
        className={`w-full md:w-[668px] px-1 md:px-2 py-1 bg-slate-800 justify-start items-start gap-2.5 md:mt-8 ${props.divSecond}`}
      >
        <div className="justify-start items-center gap-1 flex mt-8 mb-2 md:mt-0 md:mb-0">
          <Image src={imghash} alt="Hash" className="w-[16px] md:w-4" />
          <p className="text-_paratColor text-[18px] font-[500] leading-[27px]">
            5ff753461923d3aaf99fa70e60d2f0d 4bf8103383efcc539c91af127d0245 f49
          </p>
        </div>
      </div>
    </div>
  );
}
