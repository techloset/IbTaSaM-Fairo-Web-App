import Image from "next/image";
export default function TeamCard(props) {
  return (
    <div className="w-full h-16 px-4 py-3 bg-white lg:bg-slate-50 justify-between items-center flex mt-4">
      <div className="px-3 py-2 bg-_blueColor justify-start items-center inline-flex">
        <div className="text-white  text-[13px] font-normal font-['Aeonik'] leading-tight flex-shrink-0">
          {props.btnText}
        </div>
      </div>
      <div className="w-[88px] h-10 relative">
        <button className="w-10 h-10 p-1 left-[48px] top-0 absolute bg-_paratColor rounded-sm flex-col justify-center items-center gap-2 inline-flex">
          <div className="w-6 h-6 relative">
            <Image src={props.Icon1} alt="BullHorn" />
          </div>
        </button>
        <button
          className={`w-10 h-10 p-1 left-0 top-0 absolute bg-_paratColor rounded-sm flex-col justify-center items-center gap-2 inline-flex ${props.hid}`}
        >
          <div className="p-1 justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative">
              <Image src={props.Icon2} alt="Edit" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
