import Image from "next/image";
export default function BoardingCard(props) {
  return (
    <div className="max-w-[1320px] h-[200px] bg-_greenColor mb-8 flex items-center justify-center flex-col relative">
      <div className="text-center text-white text-[24px] font-[400]  leading-[150%]">
        {props.heading}
      </div>
      <div className="md:w-[640px] text-center text-_grayLight text-[16px] font-[400]  leading-[150%]">
        {props.subHeading}
      </div>
      <Image
        src={props.imgSrc}
        alt="Img"
        className="absolute right-0 hidden md:inline-flex"
      />
    </div>
  );
}
