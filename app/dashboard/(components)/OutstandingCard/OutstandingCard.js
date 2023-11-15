export default function OutstandingCard(props) {
  return (
    <div className="w-full md:h-16 px-4 py-3 bg-white lg:bg-_bgSlateColor justify-between items-center md:flex mt-4">
      <div className="md:flex items-center justify-center">
        <div className="px-3 py-2 bg-_blueColor justify-start items-center inline-flex">
          <div className="text-white  text-[13px] font-normal  leading-tight flex-shrink-0">
            {props.btnText}
          </div>
        </div>
        <div className="md:ml-3 my-3 md:my-0">
          <span className="text-_graydark font-normal dashOutStanding">
            {props.content}
          </span>
          <span className="text-_graydark font-bold ml-1 dashOutStanding">
            {props.contentPart}
          </span>
        </div>
      </div>
      <button className="px-6 py-2 bg-_paratColor justify-center items-center gap-1 inline-flex">
        <div className="text-center text-teal-900 font-normal dashOutStanding">
          {props.secondBtnText}
        </div>
      </button>
    </div>
  );
}
