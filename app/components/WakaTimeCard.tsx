import { technologies } from "../utils/technologyConstants";
import { WakaTimeLanguages } from "@/types";

const defaultColor = "#D4D4D8";
const hexColorCode = (name: string) =>
  technologies[name.toLowerCase()]?.hexColor || defaultColor;

function WakaTimeCard({ languages }: { languages: WakaTimeLanguages }) {

  let gradientStop: number = 0;
  const gradientString = languages
    .map(({ name, percent }, i) => {
      const color: string = hexColorCode(name);
      const stop: number = Math.floor(percent);
      gradientStop += stop;
      return ` ${color}${i !== languages.length - 1 ? ` ${gradientStop}%` : ""}`;
    })
    .join();

  return (
    <div className="bg-theme-neutral/25 shadow-md w-full flex flex-col waka-card rounded-md p-4">
      <div className="grow flex flex-col justify-start">
        <div
          className="p-1 rounded-sm"
          style={{
            backgroundImage: `linear-gradient(to right,${gradientString})`,
          }}
        ></div>
        {languages.map(({ name, percent, text }, i) => {
          return (
            <div
              key={i}
              className="p-2 pt-1 h-24 flex flex-col justify-between rounded-md bg-theme-accent mt-3"
            >
              <p>{name}</p>
              <p className="font-sans font-medium">{`${percent}%`}</p>
              <p className="font-sans font-medium">{text}</p>
              <div
                className="p-1 rounded-sm"
                style={{
                  width: `${percent}%`,
                  backgroundColor: hexColorCode(name),
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WakaTimeCard;
