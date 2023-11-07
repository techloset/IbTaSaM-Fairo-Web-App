import Image from "next/image";
import Header from "../OnboardingScreen/(components)/Header/Header";
import wallet from "@/public/svg/wallet.svg";
import VerifyText from "./(components)/VerifyText/VerifyText";
import TeamMember from "./(components)/TeamMember/TeamMember";
import info from "@/public/svg/info.svg";

export default function page() {
  const data = [
    {
      dot: ".",
      content: "Please access this page using the deployer wallet:",
      link: " https://fairo.demo/verify/30sd",
    },
    {
      dot: ".",
      content: "Registered deployer wallet:",
      link: " 0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6",
    },
    {
      dot: ".",
      content: "Onboarding Process:",
      link: "Ready",
    },
    {
      dot: ".",
      content: "Core Team:",
      link: "5/5 wallets",
    },
    {
      dot: ".",
      content: "Mods:",
      link: "10/10 wallets",
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-[1320px] mx-auto px-7">
        <div className="md:max-w-[1320px] mx-auto md:h-[200px] bg-_greenColor mb-8 py-10 flex items-center justify-center flex-col relative">
          <div className="text-center text-white text-[24px] font-[400] font-['Aeonik'] leading-[150%]">
            Verify your Project
          </div>
          <div className="md:w-[640px] text-center text-gray-200 text-[16px] font-['Aeonik'] leading-[150%]">
            <div class=" text-center">
              <ul className="space-y-[-10px] px-2 sm:px-0">
                <li className="text-gray-200 text-base font-['Aeonik'] mt-2">
                  Once all your team members have signed on, we can start the
                  verification process.
                </li>
                {data.map((item) => {
                  return (
                    <VerifyText
                      key={item.id}
                      dot={item.dot}
                      content={item.content}
                      link={item.link}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <Image
            src={wallet}
            alt="Img"
            className="absolute right-0 hidden lg:inline-flex"
          />
        </div>
        <div className="flex justify-center">
          <div class="w-full md:w-[640px] p-6 bg-slate-800 border border-slate-800 justify-start items-start inline-flex">
            <ul className="space-y-[5px]">
              <li>
                <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
                  Fairo Project Verification
                </span>
              </li>
              <li>
                <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
                  Project name:
                </span>
                <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
                  Coolman’s Universe
                </span>
              </li>

              <TeamMember
                teamMember="Core"
                linkName="actionjackson"
                link="0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6"
                discord="johnny"
                twitter="fatcat"
                telegram="mcflurry"
              />
              <TeamMember
                teamMember="Mods"
                linkName="franzia"
                link="0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6"
                discord="johnny"
                twitter="loosey"
                telegram="goosey"
              />

              <li>
                <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
                  Contract Wallets.
                </span>
              </li>
              <li>
                <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
                  Coolman NFT:
                </span>
                <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
                  0x4cb18386e5d1f34dc6eea834bf3534a970a3f8e7
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[640px] h-[200px] mx-auto bg-white border border-gray-100 my-10 p-6">
          <input
            type="text"
            placeholder="Paste your message here"
            className="text-_grayColor text-sm font-normal font-['Aeonik'] leading-[21px] outline-none w-[100%]"
          />
        </div>
        <div className="w-full md:w-[640px] mx-auto">
          <div class="text-black text-lg font-medium font-['Aeonik'] leading-[27px] flex gap-2">
            Optional tip
            <Image src={info} alt="info" className="cursor-pointer" />
          </div>
        </div>
        <div className="w-full md:w-[640px] h-[52px] mx-auto bg-white border border-gray-100 flex items-center my-5 px-4">
          <input
            type="text"
            placeholder="Enter amount"
            className="text-_grayColor text-sm font-normal font-['Aeonik'] leading-[21px] outline-none w-[100%]"
          />
          <div class="w-[42px] h-[37px] p-1 bg-emerald-400 rounded-sm flex-col justify-start items-start gap-2.5 inline-flex">
            <div class="p-1 justify-start items-start gap-2.5 inline-flex">
              <div class="text-teal-900 text-sm font-normal font-['Aeonik'] leading-[21px]">
                ETH
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[640px] mx-auto">
          <div className="grid grid-cols-2 gap-5 py-8">
            <div class="py-3.5 bg-white border border-emerald-400 justify-center items-center inline-flex">
              <div class="text-center text-emerald-400 text-base font-medium font-['Aeonik'] leading-normal">
                ← Back
              </div>
            </div>
            <div class="py-3.5 bg-teal-900 justify-center items-center inline-flex">
              <div class="text-center text-emerald-400 text-base font-medium font-['Aeonik'] leading-normal">
                Continue →
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
