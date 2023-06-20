import { StaticImageData } from "next/image";
import rick from "../../public/images/rick.png";
import portfolio from "../../public/images/portfolio.png";
import taskManager from "../../public/images/taskmanager.png";

export interface Portfolio {
  image: StaticImageData;
  type: string;
  title: string;
  description: string;
  url: string;
}
export const PORTFOLIO: Portfolio[] = [
  {
    type: "SERVICE",
    title: "Rick and Morty APP",
    description:
      "Rick and Morty APP is a website where you can find information about the characters, episodes, and seasons of the Netflix series Rick and Morty.",
    url: "https://github.com/AcxelAmbrosi/RickAndMorty",
    image: rick,
  },
  {
    type: "INFORMATION",
    title: "Portfolio",
    description:
      "This is my personal website where you can find my personal information, skills, projects, and certificates that I have acquired throughout my training as a web developer.",
    url: "https://github.com/AcxelAmbrosi/Portafolio",
    image: portfolio,
  },
  {
    type: "ADMINISTRATION",
    title: "Task Manager",
    description:
      "This is a website created to manage your daily tasks, developed using the React library on the front-end and NodeJS on the back-end.",
    url: "https://github.com/AcxelAmbrosi/PERN-Stack",
    image: taskManager,
  },
];
