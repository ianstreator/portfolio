export type WakaData = {
  data: {
    languages: {
        name:string;
        percent:number;
        text:string;
    }[];
  };
};

export type ProjectData = {
  title: string;
  description?: string;
  githubHREF?: string;
  siteHREF?: string;
  stack: string[];
};
