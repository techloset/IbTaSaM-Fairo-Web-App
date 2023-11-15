export default function VerifyText(props) {
  return (
    <li>
      <span className="text-[40px] text-white mr-2">{props.dot}</span>
      <span className="text-_grayLight text-sm font-['Aeonik'] ">
        {props.content}
      </span>
      <span className="text-_paratColor text-sm  font-['Aeonik'] leading-[21px] ml-1">
        {props.link}
      </span>
    </li>
  );
}
