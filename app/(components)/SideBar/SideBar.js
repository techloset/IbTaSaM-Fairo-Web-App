"use client";
import polygon from "@/public/svg/polygon.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function SideBar(props) {
  const [show, setShow] = useState(true);

  const linksArray = [
    {
      href: "/dashboard",
      class: `self-stretch h-[47px] pl-6 pr-[27px] py-[13px] ${props.dashCss} flex-col justify-center items-start gap-2.5 flex`,
      content: "Dashboard",
    },
    {
      href: "/profile",
      class: `self-stretch h-[47px] pl-6 pr-[73px] py-[13px] ${props.proCss} flex-col justify-center items-start gap-2.5 flex`,
      content: "My Profile",
    },
    {
      href: "/feed",
      class: `self-stretch h-[47px] pl-6 pr-[27px] py-[13px] ${props.feeCss} flex-col justify-center items-start gap-2.5 flex`,
      content: "My Feed",
    },
    {
      href: "/invites",
      class: `self-stretch h-[47px] pl-6 pr-[27px] py-[13px] ${props.invCss} flex-col justify-center items-start gap-2.5 flex`,
      content: "Invites",
    },
  ];

  const linksArray2 = [
    {
      href: "/coolman",
      class: `self-stretch h-[47px] pl-6 pr-[27px] py-[13px] ${props.coolCss} flex-col justify-center items-start gap-2.5 flex`,
      content: "Coolman’s Universe",
    },
    {
      href: "/nft",
      class: `self-stretch h-[47px] pl-6 pr-[73px] py-[13px] ${props.illCss} flex-col justify-center items-start gap-2.5 flex`,
      content: "IlluminatiNFT",
    },
  ];

  return (
    <>
      <button
        id="dropdownDividerButto"
        data-dropdown-toggle="dropdownDivider"
        className="lg:hidden px-4 py-2 flex items-center justify-between w-full sm:w-[500px] lg:w-[416px] mx-auto h-[52px] bg-white border border-_grayborder"
        type="button"
        onClick={() => setShow(!show)}
      >
        {props.mobText}
        <Image src={polygon} alt="polygon" />
      </button>

      <div
        id="dropdownDivider_"
        className="w-full sm:w-[500px] lg:w-[416px] mx-auto"
      >
        <ul
          className={`${
            show ? "hidden" : "block"
          } lg:flex flex-col flex-shrink-0 z-10 bg-white p-2 space-y-2`}
          aria-labelledby="dropdownDividerButton"
        >
          {linksArray.map((item) => {
            return (
              <Link key={item.id} href={item.href} className={item.class}>
                <div className="justify-start gap-2 inline-flex">
                  <div className="text-center text-[14px] font-[400] leading-[21px]">
                    {item.content}
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
        <ul
          className={`${
            show ? "hidden" : "block"
          } lg:flex flex-col flex-shrink-0 z-10 bg-white px-2 pb-2 lg:p-2 space-y-2 lg:mt-4`}
          aria-labelledby="dropdownDividerButton"
        >
          {linksArray2.map((item) => {
            return (
              <Link key={item.id} href={item.href} className={item.class}>
                <div className="justify-start gap-2 inline-flex">
                  <div className="text-center text-sm font-normal leading-[21px]">
                    {item.content}
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
