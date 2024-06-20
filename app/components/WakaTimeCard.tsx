import { technologies } from "../utils/technologyConstants";
import { WakaTimeLanguages } from "@/types";

const defaultColor = "#D4D4D8";

const hexColorCode = (name: string): string =>
  technologies[name.toLowerCase()]?.hexColor || defaultColor;

const buildGradientString = (languages: WakaTimeLanguages) => {
  const buffer = 3.5;
  let nextBufferedStop = 0;
  let currentColorStop = 0;
  return languages
    .map(({ name, percent }, i) => {
      const color = hexColorCode(name);
      const stop = Math.floor(percent);
      currentColorStop += stop;

      const fullPercentColor = `${color} ${currentColorStop - buffer}%`;
      const bufferedPercentColor = `${color} ${nextBufferedStop}%`;
      nextBufferedStop += stop + buffer;

      return i == 0
        ? fullPercentColor
        : ` ${bufferedPercentColor}, ${fullPercentColor}`;
    })
    .join();
};

function WakaTimeCard({ languages }: { languages: WakaTimeLanguages }) {
  const gradientString = buildGradientString(languages);
  return (
    <div className="bg-theme-neutral/25 shadow-md w-full flex flex-col waka-card rounded-md p-4">
      <div className="grow flex flex-col justify-start">
        <div
          className="p-1 rounded-sm"
          style={{
            backgroundImage: `linear-gradient(to right, ${gradientString})`,
          }}
        ></div>
        <ul>
          {languages.map(({ name, percent, text }, i) => {
            return (
              <li
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default WakaTimeCard;
