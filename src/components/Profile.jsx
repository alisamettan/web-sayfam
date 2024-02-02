import { Data } from "../Data/Data";

export default function Profile() {
  return (
    <div className=" bg-slate-100 py-16 flex justify-center flex-col items-center ">
      <h1 className="text-4xl">Profile</h1>
      <div className="flex flex-row justify-between mt-8 gap-16 mx-28">
        <div className="p-6 bg-white mb-5 flex gap-8 flex-col flex-1  rounded-xl shadow-[10px_10px_5px_0px_rgba(69,65,65,0.75)]">
          <h1 className="text-2xl text-red-500">{Data.en.profile.title}</h1>

          {Data.en.profile.section.map((section) => {
            return (
              <div className="flex flex-row">
                <div className="flex flex-1">
                  <h1 className="font-black">{section.title}</h1>
                </div>
                <div className="flex flex-1">
                  <p className="font-thin">{section.info}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-1 flex-col gap-8 pt-6">
          <h1 className="text-2xl">{Data.en.profile.abouttitle}</h1>
          <p>{Data.en.profile.about}</p>
        </div>
      </div>
    </div>
  );
}
