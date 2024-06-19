export type WakaTimeLanguages = {
  name: string;
  percent: number;
  text: string;
}[];
export type WakaTimeData = {
  data: { languages: WakaTimeLanguages };
};

export type ProjectData = {
  title: string;
  description?: string;
  githubHREF?: string;
  siteHREF?: string;
  techStack: string[];
};
