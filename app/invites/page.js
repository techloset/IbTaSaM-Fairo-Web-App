import SideBar from "../(components)/SideBar/SideBar";
import edit from "@/public/svg/invitesSvg/editAlt.svg";
import trash from "@/public/svg/invitesSvg/trash.svg";
import Header from "../(components)/Header/Header";
import TableRow from "./(components)/TableRow/TableRow";

export function generateMetadata() {
  return {
    title: "Fairo Invites",
  };
}

export default function page() {
  const tableData = [
    {
      project: "Coolman’s Universe",
      wallet: "0x8aff5ca996f77487a4f04f1ce905bf3d27455580",
      status: "Sent",
      statusCss: "bg-_bgSlateColor text-black",
      editImg: edit,
      trashImg: trash,
    },
    {
      project: "Coolman’s Universe",
      wallet: "0x8aff5ca996f77487a4f04f1ce905bf3d27455580",
      status: "Started Onboarding",
      statusCss: "bg-orange-100 text-orange-500",
      editImg: edit,
      trashImg: trash,
    },
    {
      project: "Coolman’s Universe",
      wallet: "0x8aff5ca996f77487a4f04f1ce905bf3d27455580",
      status: "Pending Verification",
      statusCss: "bg-_grayborder text-_verificationCOlor",
      editImg: edit,
      trashImg: trash,
    },
    {
      project: "Coolman’s Universe",
      wallet: "0x8aff5ca996f77487a4f04f1ce905bf3d27455580",
      status: "Verified",
      statusCss: "bg-teal-100 text-teal-900",
      editImg: edit,
      trashImg: trash,
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-[1320px] h-[200px] mx-auto px-7 lg:flex gap-7">
        <SideBar
          mobText="Invites"
          dashCss="bg-_bgSlateColor text-_grayColor"
          proCss="bg-_bgSlateColor text-_grayColor"
          feeCss="bg-_bgSlateColor text-_grayColor"
          invCss="bg-emerald-400 text-black"
          coolCss="bg-_bgSlateColor text-_grayColor"
          illCss="bg-_bgSlateColor text-_grayColor"
        />
        <div className="lg:w-[864px] md:h-[765px] lg:bg-white">
          <div className="lg:m-8">
            <div className="text-black text-lg font-normal font-['Aeonik'] leading-[27px] mt-5 lg:mt-0">
              Send an Invite
            </div>
            <div className="lg:flex gap-5 space-y-5 lg:space-y-0 mt-6 mb-10">
              <div className="lg:w-[234.62px] h-[52px] bg-white border border-_grayborder flex">
                <input
                  className="text-_grayColor text-sm font-normal font-['Aeonik'] leading-[21px] outline-none px-5"
                  placeholder="Project Name"
                  type="text"
                />
              </div>
              <div className="lg:w-[325px] col-span-2 h-[52px] bg-white border border-_grayborder flex">
                <input
                  className="text-_grayColor text-sm font-normal font-['Aeonik'] leading-[21px] outline-none px-5"
                  placeholder="Owner address"
                  type="text"
                />
              </div>
              <button className="w-full lg:w-44 h-[52px] bg-_paratColor items-center gap-1 inline-flex justify-center">
                <div className="text-teal-900 text-sm font-normal font-['Aeonik'] leading-[21px] flex-shrink-0">
                  Create invite
                </div>
              </button>
            </div>
            <div className="text-black text-lg font-normal font-['Aeonik'] leading-[27px] mb-6">
              Invite status
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr>
                    <th scope="col" className="pb-6">
                      <div className="inviTableHead dashOutStanding">
                        Project
                      </div>
                    </th>
                    <th scope="col" className="pb-6">
                      <div className="inviTableHead dashOutStanding">
                        Wallet
                      </div>
                    </th>
                    <th scope="col" className="pb-6">
                      <div className="inviTableHead dashOutStanding">
                        Status
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => {
                    return (
                      <TableRow
                        key={item.id}
                        project={item.project}
                        wallet={item.wallet}
                        status={item.status}
                        statusCss={item.statusCss}
                        editImg={edit}
                        trashImg={trash}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
