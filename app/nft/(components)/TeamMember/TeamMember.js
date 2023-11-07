import Image from "next/image";
import dot from "@/public/svg/dot-svgrepo-com.svg";

export default function TeamMember(props) {
  return (
    <>
      <li>
        <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
          Team Members -
        </span>
        <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
          {props.teamMember}
        </span>
      </li>
      <li>
        <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
          {props.linkName} -
        </span>
        <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
          {props.link}
        </span>
      </li>
      <li className="flex items-center pt-1">
        <span className="mx-2">
          <Image src={dot} />
        </span>
        <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
          Discord:
        </span>
        <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
          {props.discord}
        </span>
      </li>
      <li className="flex items-center">
        <span className="mx-2">
          <Image src={dot} />
        </span>
        <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
          Twitter:
        </span>
        <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
          {props.twitter}
        </span>
      </li>
      <li className="flex items-center pb-1">
        <span className="mx-2">
          <Image src={dot} />
        </span>
        <span className="text-white text-sm font-normal font-['Aeonik'] leading-[21px]">
          Telegram:
        </span>
        <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
          {props.telegram}
        </span>
      </li>
    </>
  );
}
