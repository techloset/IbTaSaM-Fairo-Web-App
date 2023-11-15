import SideBar from "../(components)/SideBar/SideBar";
import Header from "../(components)/Header/Header";
import FeedCard from "./FeedCard/FeedCard";

export const metadata = {
  title:"Fairo Feed"
}

export default function page() {
  return (
    <>
      <Header />
      <div className="max-w-[1320px] h-[200px] mx-auto px-7 lg:flex gap-7">
        <SideBar
          mobText="My feed"
          dashCss="bg-_bgSlateColor text-_grayColor"
          proCss="bg-_bgSlateColor text-_grayColor"
          feeCss="bg-emerald-400 text-black"
          invCss="bg-_bgSlateColor text-_grayColor"
          coolCss="bg-_bgSlateColor text-_grayColor"
          illCss="bg-_bgSlateColor text-_grayColor"
        />

        <div className="lg:w-[864px]  mt-5 lg:mt-0">
          <FeedCard />
          <FeedCard />
        </div>
      </div>
    </>
  );
}
