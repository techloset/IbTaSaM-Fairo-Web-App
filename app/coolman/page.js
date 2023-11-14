import Image from "next/image";
import SideBar from "../(components)/SideBar/SideBar";
import imgCopy from "@/public/svg/coolmanSvg/Copy.svg";
import profileImg from "@/public/images/coolman-images/ProfilePic.jpg";
import Header from "../(components)/Header/Header";
export default function page() {
  return (
    <>
      <Header />
      <div className="max-w-[1320px] h-[200px] mx-auto px-7 lg:flex gap-7">
        <SideBar
          mobText="Coolman’s Universe"
          dashCss="bg-slate-50 text-gray-400"
          proCss="bg-slate-50 text-gray-400"
          feeCss="bg-slate-50 text-gray-400"
          invCss="bg-slate-50 text-gray-400"
          coolCss="bg-emerald-400 text-black"
          illCss="bg-slate-50 text-gray-400"
        />
        <div className="lg:w-[862px] md:h-[464px] bg-white">
          <div className="m-5 lg:m-8 pb-5 md:pb-0">
            <div className="md:flex justify-between items-center pt-5">
              <div className="flex gap-4 items-center">
                <div className="text-black text-lg font-normal font-['Aeonik'] leading-[27px] flex-shrink-0">
                  Coolman’s Universe
                </div>
                <div className="w-[142px] h-8 px-3 py-1.5 bg-gray-100 justify-start items-center gap-2.5 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-_verificationCOlor text-[13px] font-normal font-['Aeonik'] leading-tight flex-wrap">
                      Pending Verification
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-_paratColor text-sm font-normal font-['Aeonik'] leading-[21px] flex items-center gap-2 mt-3 md:mt-0">
                <Image src={imgCopy} alt="Copy-Icon" />
                https://fairo.demo/invite/359d
              </button>
            </div>

            <div className="w-full h-14 px-4 py-3 bg-slate-50 justify-start items-start gap-2.5 inline-flex my-5">
              <div className="justify-start items-center gap-2 flex">
                <div className="text-black text-lg font-normal font-['Aeonik'] leading-[27px]">
                  Invited by
                </div>
                <div className="h-8 relative">
                  <Image src={profileImg} alt="Profile-Image" />
                  <div className="left-[40px] top-[6px] absolute text-black text-base font-bold font-['Roboto']">
                    ajt
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:h-12 px-4 py-3 bg-slate-800 justify-start items-start gap-2.5 inline-flex">
              <div className="justify-start items-center gap-2 md:flex">
                <div className="text-white text-[11px] sm:text-base font-normal font-['Aeonik'] leading-normal">
                  Designated Wallet:
                </div>
                <div className="text-_paratColor text-[11px] sm:text-base font-normal font-['Aeonik'] leading-normal">
                  0x8aff5ca996f77487a4f04f1ce905bf3d27455580
                </div>
              </div>
            </div>

            <div className="max-w-full text-gray-900 text-[12px] sm:text-sm font-normal font-['Aeonik'] leading-[21px] md:hidden my-3">
              The fates have decided <br />
              0xfa5d05df712b059b74ccefe4084785be7f2ea1b8 shall receive the
              Ancient Gutter Color Illuminary.
              <br />
              <br />
              https://opensea.io/ assets/0x50b4a624b297198debedf908940f7aacfba6
              0180/21
              <br /> <br />
              🔺gang gang🔺 @everyone
            </div>

            <div className="md:flex gap-4 my-5">
              <div className="lg:w-full col-span-2 h-[52px] bg-white border border-gray-100 flex">
                <input
                  className="text-gray-400 text-sm font-normal font-['Aeonik'] leading-[21px] outline-none px-5"
                  placeholder="Deployer Wallet"
                  type="text"
                />
              </div>
              <button className="w-full md:w-44 h-[52px] px-12 py-2 bg-_paratColor justify-center items-center gap-1 inline-flex mt-5 md:mt-0 text-teal-900 text-sm font-normal font-['Aeonik'] leading-[21px]">
                Save
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 relative flex-col justify-start items-start inline-flex border-2 border-black rounded-full p-0.5">
                <button className="w-3 h-5 bg-white rounded-full active:bg-_paratColor"></button>
              </div>
              <lable className="w-[610px] text-black text-base font-normal font-['Aeonik'] leading-normal">
                Project does not have a deployer wallet
              </lable>
            </div>

            <div className="gap-4 my-5 md:hidden">
              <div className="lg:w-full col-span-2 h-[52px] bg-white border border-gray-100 flex">
                <input
                  className="text-gray-400 text-sm font-normal font-['Aeonik'] leading-[21px] outline-none px-5"
                  placeholder="Fairo Content Hash"
                  type="text"
                />
              </div>
              <button className="w-full md:w-44 h-[52px] px-12 py-2 bg-_paratColor justify-center items-center gap-1 inline-flex mt-5 md:mt-0 text-center text-teal-900 text-sm font-normal font-['Aeonik'] leading-[21px]">
                Save
              </button>
            </div>

            <button className="w-full h-[52px] px-12 py-2 bg-_redColor flex justify-center items-center gap-1 mt-5 md:mt-12 text-center text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
