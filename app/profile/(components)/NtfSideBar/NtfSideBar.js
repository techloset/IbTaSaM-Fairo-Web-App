"use client";
import polygon from "@/public/svg/polygon.svg";
import check from "@/public/svg/check.svg";
import user from "@/public/images/user.png";
import Image from "next/image";
import twitter from "@/public/svg/icons/twitter.svg";
import group from "@/public/svg/icons/group.svg";
import globe from "@/public/svg/icons/globe.svg";
import opensea from "@/public/svg/icons/opensea.svg";
import Link from "next/link";

import { useState } from "react";
import NtfLinks from "../NtfLinks/NtfLinks";

export default function SideBar(props) {
  const [show, setShow] = useState(true);

  const arrayOfNtfLinks = [
    { imgSrc: "/twitter", content: " @truth" },
    { imgSrc: "/group", content: "discord.gg/illuminati" },
    { imgSrc: "/globe", content: "illuminatinft.com" },
    { imgSrc: "/opensea", content: "illuminaticollective" },
    { imgSrc: "/opensea", content: "illuminatigold" },
    { imgSrc: "/opensea", content: "illuminatinft-illuminaries" },
  ];

  return (
    <>
      <div
        id="dropdownDivider_"
        className="w-full sm:w-[500px] lg:w-[416px] mx-auto h-full bg-white"
      >
        <div className="flex items-center justify-center flex-col pt-5">
          <Image class="rounded-full" src={user} />
          <div className="flex items-center gap-4">
            <div class="text-black text-[25px] font-medium font-['Aeonik'] leading-[48px] sm:ml-14 my-3 ">
              IlluminatiNFT
            </div>
            <div class="w-[87px] h-8 px-2 py-1 bg-green-50 justify-start items-center gap-1 inline-flex">
              <div class="w-6 h-6 relative">
                <Image src={check} />
              </div>
              <div class="text-emerald-400 text-xs font-bold font-['Aeonik'] leading-[18px]">
                Verified
              </div>
            </div>
          </div>
        </div>
        <div className={`${show ? "hidden" : "block"} lg:block bg-white py-5`}>
          <div className="flex flex-col justify-center items-center space-y-3">
            {arrayOfNtfLinks.map((link) => {
              return (
                <NtfLinks
                  key={link.id}
                  imgSrc={link.imgSrc}
                  content={link.content}
                />
              );
            })}
          </div>
        </div>
        <button
          className="bg-white w-full flex justify-center lg:hidden pb-4 lg:pb-0"
          type="button"
          onClick={() => setShow(!show)}
        >
          {props.mobText}
          <Image src={polygon} alt="polygon" />
        </button>
      </div>
    </>
  );
}
