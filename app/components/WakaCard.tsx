type languageStats = {
  data: {
    name: string;
    percent: number;
    text: string;
  }[];
};
const colors: {
  [uid: string]: string;
} = {
  JavaScript: "#FDE047",
  TypeScript: "#7DD3FC",
  SCSS: "#FDA4AF",
  CSS: "#A5B4FC",
  Ruby: "#FCA5A5",
  Go: "#67E8F9",
};
const noColor = "#D4D4D8";
const color = (name: string) => (colors[name] ? colors[name] : noColor);

function WakaCard({ data }: languageStats) {
  const topThree = data.filter((_, i) => i < 3);
  const gradient = topThree.map(({ name }) => color(name));
  return (
    <div className="bg-theme-neutral/25 shadow-md w-full h-full flex flex-col waka-card rounded-md p-4">
      <div className="grow flex flex-col justify-between">
        <div
          className="p-1 rounded-sm"
          style={{
            backgroundImage: `linear-gradient(to right, ${gradient})`,
          }}
        ></div>
        {topThree.map(({ name, percent, text }, i) => {
          return (
            <div
              key={i}
              className="p-2 pt-1 h-24 flex flex-col justify-between rounded-md bg-theme-accent"
            >
              <p>{name}</p>
              <p className="font-sans font-medium">{`${percent}%`}</p>
              <p className="font-sans font-medium">{text}</p>
              <div
                className="p-1 rounded-sm"
                style={{
                  width: `${percent}%`,
                  backgroundColor: gradient[i],
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WakaCard;
