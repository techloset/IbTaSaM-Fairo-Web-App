import SideBar from "../(components)/SideBar/SideBar";
import Header from "../(components)/Header/Header";
import FeedCard from "./FeedCard/FeedCard";

export default function page() {
  return (
    <>
      <Header />
      <div className="max-w-[1320px] h-[200px] mx-auto px-7 lg:flex gap-7">
        <SideBar
          mobText="My feed"
          dashCss="bg-slate-50 text-gray-400"
          proCss="bg-slate-50 text-gray-400"
          feeCss="bg-emerald-400 text-black"
          invCss="bg-slate-50 text-gray-400"
          coolCss="bg-slate-50 text-gray-400"
          illCss="bg-slate-50 text-gray-400"
        />

        <div className="lg:w-[864px]  mt-5 lg:mt-0">
          <FeedCard />
          <FeedCard />
        </div>
      </div>
    </>
  );
}
