'use client'
import ShadowTitle from "./ShadowTitle";
import css_icon from "../../public/icons/css_icon.png";
import html_icon from "../../public/icons/html_icon.png";
import bootstrap_icon from "../../public/icons/bootstrap_icon.png";
import gitHub_icon from "../../public/icons/gitHub_icon.png";
import javaScript_icon from "../../public/icons/javaScript_icon.png";
import linux_icon from "../../public/icons/linux_icon.png";
import node_icon from "../../public/icons/node_icon.png";
import postgresql_icon from "../../public/icons/postgresql_icon.png";
import react_icon from "../../public/icons/react_icon.png";
import tailwind_icon from "../../public/icons/tailwind_icon.png";
import firebase_icon from "../../public/icons/firebase_icon.png";
import nextjs_icon from "../../public/icons/nextjs_icon.png";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center pt-20" id="skills">
      <ShadowTitle title="Skills" />
      <RevealWrapper origin="bottom" duration={2000}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          <div className="p-5 shadow-lg rounded-lg flex flex-col items-center border-b-2 border-violet-500">
            <Image
              className="pb-2 "
              src={html_icon}
              width={128}
              height={128}
              alt="html_icon"
            />
            <p>HTML</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={css_icon}
              width={128}
              height={128}
              alt="css_icon"
            />
            <p>CSS3</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={javaScript_icon}
              width={128}
              height={128}
              alt="javaScript_icon"
            />
            <p>JavaScript</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={react_icon}
              width={128}
              height={128}
              alt="react_icon"
            />
            <p>React Native</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={tailwind_icon}
              width={128}
              height={128}
              alt="tailwind_icon"
            />
            <p>TailwindCSS</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={bootstrap_icon}
              width={128}
              height={128}
              alt="bootstrap_icon"
            />
            <p>Bootstrap</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={gitHub_icon}
              width={128}
              height={128}
              alt="gitHub_icon"
            />
            <p>GitHub</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={linux_icon}
              width={128}
              height={128}
              alt="linux_icon"
            />
            <p>Linux</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={node_icon}
              width={128}
              height={128}
              alt="node_icon"
            />
            <p>NodeJS</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={postgresql_icon}
              width={128}
              height={128}
              alt="postgresql_icon"
            />
            <p>PostgreSQL</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={nextjs_icon}
              width={128}
              height={128}
              alt="nextjs_icon"
            />
            <p>NextJs</p>
          </div>
          <div className="p-5 border-b-2 border-violet-500 shadow-lg rounded-lg flex flex-col items-center">
            <Image
              className="pb-2 "
              src={firebase_icon}
              width={128}
              height={128}
              alt="firebase_icon"
            />
            <p>Firebase</p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
