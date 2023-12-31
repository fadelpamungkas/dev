type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "mail@fadel.dev",
  title: "hi, *fadel* here.",
  description:
    "I'm a *software engineer* with over *1 year* of programming experience. \
  Currently working with *Go* and *Rust* language. Beyond the code, i fine-tune \
  my *neovim* setup, sharing tech insights through writing, \
  and exploring the limitless possibilities of technology.",
  //   "I'm a software engineer and artist based in Toronto. \
  // I have great interest in full-stack development, \
  // artificial intelligence, human-computer interactions, and everything in between.",
  socials: [
    {
      label: "GitHub",
      link: "https://github.com/fadelpamungkas",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/fadelpamungkas",
    },
    {
      label: "Medium",
      link: "https://medium.com/@fadelpamungkas",
    },
    {
      label: "CV",
      link: "/FadelPamungkas.pdf",
    }
  ],
};

export default presentation;
