import Image from "next/image";
export default function ProceedCard(props) {
  return (
    <button className="md:w-[304px] h-16 px-[97px] py-4 bg-white border border-_grayborder flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="justify-center items-center gap-3 inline-flex">
        <div className="w-8 h-8 relative">
          <Image src={props.imgSvg} alt="imgSvg" width={50} height={50} />
        </div>
        <div className="text-center text-_blackColor text-sm font-normal  leading-[21px]">
          {props.text}
        </div>
      </div>
    </button>
  );
}
