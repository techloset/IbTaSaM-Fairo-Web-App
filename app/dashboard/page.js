import SideBar from "../(components)/SideBar/SideBar";
import bullhorn from "@/public/svg/Bullhorn.svg";
import editAlt from "@/public/svg/invitesSvg/editAlt.svg";
import Header from "../(components)/Header/Header";
import OutstandingCard from "./(components)/OutstandingCard/OutstandingCard";
import TeamCard from "./(components)/TeamCard/TeamCard";

export default function page() {
  const outstandingCards = [
    {
      btnText: "IlluminatiNFT",
      content: "Approve or challenge an announcement from",
      contentPart: "ajt",
      secondBtnText: "Review",
    },
    {
      btnText: "Coolman’s Universe",
      content: "Approve or challenge an announcement from",
      contentPart: "sree",
      secondBtnText: "Review",
    },
  ];

  const teamCards = [
    {
      btnText: "Coolman’s Universe",
      Icon1: bullhorn,
      Icon2: editAlt,
    },
    {
      btnText: "IlluminatiNFT",
      hid: "hidden",
      Icon1: bullhorn,
      Icon2: editAlt,
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-[1320px] h-[200px] mx-auto px-7 lg:flex gap-7">
        <SideBar
          mobText="Dashboard"
          dashCss="bg-emerald-400 text-black"
          proCss="bg-slate-50 text-gray-400"
          feeCss="bg-slate-50 text-gray-400"
          invCss="bg-slate-50 text-gray-400"
          coolCss="bg-slate-50 text-gray-400"
          illCss="bg-slate-50 text-gray-400"
        />

        <div className="lg:w-[864px]">
          <div className="md:max-h-[453px] lg:bg-white lg:p-8 mb-7">
            <div className="text-black text-lg font-normal font-['Aeonik'] leading-[27px] mb-5 mt-5 lg:mt-0">
              Outstanding Action Items
            </div>
            {outstandingCards.map((item) => {
              return (
                <OutstandingCard
                  key={item.id}
                  btnText={item.btnText}
                  content={item.content}
                  contentPart={item.contentPart}
                  secondBtnText={item.secondBtnText}
                />
              );
            })}
          </div>

          <div className="md:max-h-[353px] lg:bg-white lg:p-8">
            <div className="text-black text-lg font-normal font-['Aeonik'] leading-[27px] mb-5">
              My Teams
            </div>
            {teamCards.map((item) => {
              return (
                <TeamCard
                  key={item.id}
                  btnText={item.btnText}
                  hid={item.hid}
                  Icon1={item.Icon1}
                  Icon2={item.Icon2}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
