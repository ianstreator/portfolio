export type WakaData = {
    data: {
      languages: {};
    };
  };
  
  export type ProjectData = {
    title: string;
    description: string;
    githubHREF: string | undefined;
    siteHREF: string | undefined;
    stack: string[];
  };
  export type Projects = { [name: string]: ProjectData };
  export type ProjectFormat = [string, ProjectData]