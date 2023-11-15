import Image from "next/image";
import SideBar from "../(components)/SideBar/SideBar";
import img from "@/public/svg/profile/image.svg";
import plus from "@/public/svg/plus.svg";
import Header from "../(components)/Header/Header";

export const metadata = {
  title: "Fairo Profile",
}

export default function page() {
  return (
    <>
      <Header />
      <div className="max-w-[1320px] h-[200px] mx-auto px-7 lg:flex gap-7">
        <SideBar
          mobText="Profile"
          dashCss="bg-_bgSlateColor text-_grayColor"
          proCss="bg-emerald-400 text-black"
          feeCss="bg-_bgSlateColor text-_grayColor"
          invCss="bg-_bgSlateColor text-_grayColor"
          coolCss="bg-_bgSlateColor text-_grayColor"
          illCss="bg-_bgSlateColor text-_grayColor"
        />
        <div className="lg:w-[864px] md:h-[765px] lg:bg-white">
          <div className="lg:m-8">
            <div className="md:max-w-[223px] h-[117px] mx-auto flex flex-col justify-center items-center gap-4 mt-6">
              <div className="w-20 h-20 relative">
                <div className="w-20 h-20 left-0 top-0 absolute bg-teal-700 rounded-full">
                  <div className="left-[23px] top-[23px] absolute">
                    <Image
                      src={img}
                      alt="imgSrc"
                      className="w-[34px] h-[34px]"
                    />
                  </div>
                </div>
              </div>
              <div className="text-sm font-normal  leading-[21px]">
                <button className="text-_graydark ">Upload new image •</button>
                <button className="text-_redColor ms-1">Remove image</button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-3">
              <div>
                <div className="proSmallInputText">Name</div>
                <div className="proSmallInputDiv">
                  <input className="proSmallInput" placeholder="John Smith" />
                </div>
              </div>
              <div>
                <div className="proSmallInputText">Email</div>
                <div className="proSmallInputDiv">
                  <input className="proSmallInput" placeholder="john@doe.com" />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-black text-lg font-normal  leading-[27px] my-7">
                Wallets
              </div>
              <div className="max-w-full proLarInputDiv">
                <input
                  className="proLarInput"
                  placeholder="0x9dA7E19cF6894B5b9AB96cfB9103678D414Af64c"
                />
              </div>
              <button className="w-full md:hidden proUplinkDiv">
                <div className="proUplinkBtn">Unlink</div>
              </button>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="proRadioBtn">
                <div className="w-3 h-5 bg-_paratColor rounded-full"></div>
              </div>
              <div className="proRadioText">Designated Signing Wallet</div>
            </div>
            <div className="md:flex items-center gap-3 mb-5">
              <div className="md:w-full proLarInputDiv">
                <input
                  className="proLarInput"
                  placeholder="0x9dA7E19cF6894B5b9AB96cfB9103678D414Af64c"
                />
              </div>
              <button className="md:max-w-44 md:mt-0 proUplinkDiv">
                <div className="proUplinkBtn">Unlink</div>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="proRadioBtn">
                <div className="w-3 h-5 bg-white rounded-full"></div>
              </div>
              <div className="proRadioText">Designated Signing Wallet</div>
            </div>
            <button className="w-[214px] h-[37px] px-12 py-2 bg-_paratColor justify-start items-center gap-1 inline-flex mt-6 mb-8 md:mt-9 md:mb-12">
              <div className="proParatBtn">Add new wallet</div>
              <div className="w-4 h-4 relative">
                <Image src={plus} alt="plus" />
              </div>
            </button>
            <button className="w-full h-[52px] px-12 py-2 bg-_paratColor flex justify-center items-center gap-1">
              <div className="proParatBtn">Save changes</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
