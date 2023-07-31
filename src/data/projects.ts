export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Fulltext Search Engine",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/snapwork-api",
  },
  {
    title: "Newsletter Service",
    techs: ["Rust"],
    link: "https://github.com/fadelpamungkas/newsletter-service",
  },
  {
    title: "Chip4 Editor",
    techs: ["Rust"],
    link: "https://github.com/fadelpamungkas/chip4editor",
  },
  {
    title: "Snapwork",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/snapwork-api",
  },
  {
    title: "Wallet Engine",
    techs: ["Go"],
    link: "https://github.com/fadelpamungkas/engine",
  },
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro"],
  //   link: "/",
  //   isComingSoon: true,
  // },
];

export default projects;
