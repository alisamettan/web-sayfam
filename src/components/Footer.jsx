import { Data } from "../Data/Data";

export default function Footer() {
  return (
    <div className="py-32 flex flex-row justify-center gap-20 dark:bg-[_#484148]">
      <p className="text-3xl">{Data.en.footer.text}</p>
      <div>
        {Data.en.footer.social.map((item) => {
          return (
            <div className="flex flex-col text-lg">
              <a>{item}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
