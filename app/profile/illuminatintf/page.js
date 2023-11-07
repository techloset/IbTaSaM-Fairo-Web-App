"use client";
import Header from "@/app/(components)/Header/Header";
import SideBar from "../(components)/NtfSideBar/NtfSideBar";

export default function page() {
  return (
    <>
      <Header />
      <div className="max-w-[1320px] max-h-[50px] mx-auto px-7 lg:flex gap-7">
        <SideBar />
        <div className="lg:w-[864px] md:h-[765px]">
          <div className="lg:mx-8">
            <div class="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-1 p-2">
              <div class="w-[207px] h-12 text-sm bg-emerald-400 flex items-center justify-center">
                Team
              </div>
              <div class="w-[207px] h-12 text-sm bg-slate-50 flex items-center justify-center">
                Contracts & Wallets
              </div>
              <div class="w-[207px] h-12 text-sm bg-slate-50 flex items-center justify-center">
                Communications Policy
              </div>
              <div class="w-[207px] h-12 text-sm bg-slate-50 flex items-center justify-center">
                Official Announcements
              </div>
            </div>
            <div class="w-full bg-slate-800 flex flex-col md:flex-row items-center justify-center gap-1 p-2 my-3">
              <div class="w-[419px] h-12 text-sm bg-emerald-400 flex items-center justify-center">
                Team
              </div>
              <div class="w-[419px] h-12 text-sm bg-slate-800 text-gray-400 flex items-center justify-center">
                Contracts & Wallets
              </div>
            </div>
          </div>
          <div class="w-full h-[88px] p-6 bg-gray-100 justify-start items-start gap-2.5 inline-flex">
            <div class="justify-center items-center gap-2 flex">
              {/* <img
                class="w-10 h-10 rounded-full"
              /> */}
              {/* <div class="text-black text-2xl font-bold font-['Roboto']">
                drizzius darius
              </div> */}
              {/* <div class="text-black text-sm font-bold font-['Roboto']">
                (drizzy dre#5174)
              </div> */}
              {/* <div class="px-2 py-1 bg-gray-100 justify-start items-center gap-1 flex">
                <div class="text-indigo-600 text-xs font-bold font-['Aeonik'] leading-[18px]">
                  Not joined yet
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { useState } from 'react';

// export default function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

// function Panel({
//   title,
//   children,
//   isActive,
//   onShow
// }) {
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={onShow}>
//           Show
//         </button>
//       )}
//     </section>
//   );
// }
