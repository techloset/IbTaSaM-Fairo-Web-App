"use client";
import wallet from "@/public/svg/wallet.svg";
import metamask from "@/public/svg/proceedSvg/metamask.svg";
import walletconnect from "@/public/svg/proceedSvg/walletconnect.svg";
import trezor from "@/public/svg/proceedSvg/trezor.svg";
import ledger from "@/public/svg/proceedSvg/ledger.svg";

import Link from "next/link";
import Header from "./(components)/Header/Header";
import ProceedCard from "./(components)/ProceedCard/ProceedCard";
import BoardingCard from "./(components)/BoardingCard/BoardingCard";

export default function page() {
  const proceedCards = [
    { imgSvg: metamask, text: "Metamask" },
    { imgSvg: walletconnect, text: "WalletConnect" },
    { imgSvg: trezor, text: "Trezor" },
    { imgSvg: ledger, text: "Ledger" },
  ];

  return (
    <>
      <Header />
      <div className="max-w-[1320px] mx-auto px-7">
        <BoardingCard
          heading="Welcome Back"
          subHeading="Choose your login method."
          imgSrc={wallet}
        />

        <div className="w-full md:w-[640px] h-[52px] mx-auto bg-white border border-gray-100 md:flex items-center my-5 hidden">
          <input
            type="text"
            placeholder="Enter invitation link"
            className="text-_grayColor text-sm font-normal font-['Aeonik'] leading-[21px] outline-none w-[100%] ml-4"
          />
        </div>
        <div className="w-full md:w-[640px] h-[52px] mx-auto bg-white border border-gray-100 flex items-center my-5 md:hidden">
          <input
            type="text"
            placeholder="Your Name"
            className="text-_grayColor text-sm font-normal font-['Aeonik'] leading-[21px] outline-none w-[100%] ml-4"
          />
        </div>
        <div className="w-[388px] md:w-[640px] h-[52px] mx-auto py-3.5 bg-_greenColor justify-center items-center hidden md:block">
          <Link
            href="/profile"
            className="flex justify-center text-_lightGreenColor text-base font-normal font-['Aeonik'] leading-normal"
          >
            Log in
          </Link>
        </div>
        <div className="text-center my-5 text-_grayColor text-sm font-normal font-['Aeonik'] leading-[21px]">
          Or proceed with
        </div>

        <div className="w-full md:w-[640px] md:h-[52px] mx-auto grid md:grid-cols-2 md:gap-5 space-y-3 md:space-y-0 pt-5 md:pt-0">
          {proceedCards.map((card) => {
            return (
              <ProceedCard
                key={card.id}
                imgSvg={card.imgSvg}
                text={card.text}
              />
            );
          })}
        </div>
        <Link
          href="/profile"
          className="w-full md:w-[640px] h-[52px] mx-auto py-3.5 bg-_greenColor justify-center items-center block md:hidden mt-20"
        >
          <div className="text-center text-_lightGreenColor text-base font-normal font-['Aeonik'] leading-normal">
            Log in
          </div>
        </Link>
      </div>
    </>
  );
}

// <div className="w-[640px] h-[200px] mx-auto bg-white border border-gray-100 p-6">
//         <textarea
//           type="text"
//           placeholder="Paste your message here"
//           className="text-gray-400 text-sm font-normal font-['Aeonik'] leading-[21px] outline-none w-[100%] resize-none"
//         ></textarea>
//       </div>
//       <div className="w-[640px] h-[200px] mx-auto relative">
//         <div className="text-black text-lg font-medium font-['Aeonik'] leading-[27px] flex items-center">
//           Gating
//           <div className="flex items-center my-7 [&>span]:hover:inline-flex">
//             <Image src={info} alt="info" className="ml-1 cursor-pointer" />
//             <span className="w-[210px] h-[52px] justify-start items-start hidden absolute left-20">
//               <div className="bg-slate-700 rounded-lg justify-start items-center flex">
//                 <div className="rounded-lg flex-col justify-start items-center inline-flex">
//                   <div className="p-2.5 justify-start items-center gap-2.5 inline-flex">
//                     <div className="text-slate-200 text-xs font-normal font-['Source Sans Pro'] leading-none">
//                       Users must sign up for a Fairo account
//                       <br />
//                       to view gated messages.
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-[52px] self-stretch origin-top-left rotate-90 flex-col justify-start items-center inline-flex">
//                   <div className="w-9 h-2 relative"></div>
//                 </div>
//               </div>
//             </span>
//           </div>
//         </div>
//       </div>
