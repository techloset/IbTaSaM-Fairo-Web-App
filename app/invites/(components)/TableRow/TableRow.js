import Image from "next/image";
export default function TableRow(props) {
  return (
    <tr>
      <th className="py-2">
        <div className="text-gray-900 text-sm font-normal font-['Aeonik'] leading-[21px] pr-6 md:pr-0">
          {props.project}
        </div>
      </th>
      <td className="py-2">
        <div className="text-gray-900 text-sm font-normal font-['Aeonik'] leading-[21px] pr-6 md:pr-0">
          {props.wallet}
        </div>
      </td>
      <td className="py-2">
        <div
          className={`w-full md:w-auto h-8 px-3 py-1.5 justify-start items-start gap-2.5 inline-flex ${props.statusCss} mr-16 md:mr-0`}
        >
          <div className="justify-start items-center gap-2 flex">
            <div className="text-[13px] font-normal font-['Aeonik'] leading-tight flex-shrink-0">
              {props.status}
            </div>
          </div>
        </div>
      </td>
      <td className="py-2 flex gap-2 justify-end">
        <div className="w-10 h-10 p-1 bg-emerald-400 rounded-sm flex-col justify-center items-center gap-2 inline-flex ml-12 md:ml-0">
          <div className="p-1 justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative">
              <Image src={props.editImg} alt="edit" />
            </div>
          </div>
        </div>
        <div className="w-10 h-10 p-1 bg-emerald-400 rounded-sm flex-col justify-center items-center gap-2 inline-flex">
          <div className="p-1 justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative">
              <Image src={props.trashImg} alt="trash" />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
