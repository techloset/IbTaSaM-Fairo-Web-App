import Image from "next/image";
export default function NtfLinks(props) {
  return (
    <div class="h-[35px] px-2 py-1 bg-emerald-400 justify-start items-start gap-2.5 inline-flex">
      <div class="justify-start items-center gap-2 flex">
        <Image src={props.imgSrc} width={50} height={50} />
        <div class="text-black text-lg font-medium font-['Aeonik'] leading-[27px]">
          {props.content}
        </div>
      </div>
    </div>
  );
}
