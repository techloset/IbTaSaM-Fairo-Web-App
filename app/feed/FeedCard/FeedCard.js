import Image from "next/image";
import img from "@/public/images/coolman-images/ProfilePic.jpg";
import imghash from "@/public/svg/hash.svg";

export default function FeedCard() {
  return (
    <div className="w-full md:h-[246px] bg-white p-6 mb-5">
      <div className="flex items-center gap-3">
        <Image src={img} alt="First" />
        <div className="text-black text-2xl font-bold font-['Roboto']">ajt</div>
        <div className="w-32 h-[26px] px-2 py-1 bg-gray-100 justify-start items-center gap-1 inline-flex">
          <div className="text-_verificationCOlor text-xs font-bold font-['Aeonik'] leading-[18px]">
            Pending verification
          </div>
        </div>
      </div>
      <div className="text-gray-900 text-[13px] md:text-sm font-normal font-['Aeonik'] leading-[35px] my-6">
        The fates have decided 0xfa5d05df712b059b74ccefe4084785be7f2ea1b8 shall
        receive the Ancient Gutter Color Illuminary.
        <span className="block md:inline">https://opensea.io/</span>
        <span className="block md:inline">
          assets/0x50b4a624b297198debedf908940f7aacfba6
        </span>
        0180/21
        <br />
        🔺gang gang🔺 @everyone
      </div>
      <div className="w-full md:w-[668px] px-1 md:px-2 py-1 bg-slate-800 justify-start items-start gap-2.5 md:mt-8">
        <div className="justify-start items-center gap-1 flex">
          <Image src={imghash} alt="Hash" className="w-2 md:w-4" />
          <p className="text-_paratColor text-[10px] md:text-lg font-medium font-['Aeonik'] leading-[27px]">
            5ff753461923d3aaf99fa70e60d2f0d4bf8103383efcc539c91a
          </p>
        </div>
      </div>
    </div>
  );
}
