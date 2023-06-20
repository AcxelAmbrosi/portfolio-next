'use client'
import Image from "next/image";
import Shape_copy from "../../public/images/bgabout.png";
import { FaDownload } from "react-icons/fa";
import ShadowTitle from "./ShadowTitle";
import { RevealWrapper } from "next-reveal";
export const AboutMe = () => {
  return (
    <section className=" flex flex-col items-center justify-center mt-28 md:mt-0 pt-20 p-4" id="about">
      <ShadowTitle title="About Me" />
      <div className="flex flex-col md:flex-row justify-center items-center">
        <RevealWrapper className="flex md:w-1/2 justify-center items-center" duration={2000} origin="bottom">
          <Image
            className="rounded-xl object-contain"
            src={Shape_copy}
            width={500}
            height={500}
            alt="acxel"
            loading="lazy"
          />
        </RevealWrapper>
        <div className="p-4 md:w-1/2">
          <RevealWrapper duration={2000} origin="right">
            <h3 className="text-4xl pb-3">I'm Acxel</h3>
          </RevealWrapper>
          <RevealWrapper duration={2500} origin="right">
            <p className="text-xl pb-3">
              I am a <span className="text-violet-500">student</span>
              <span> of </span>
              <span className="text-violet-500">
                Information Technology Engineering
              </span>
            </p>
          </RevealWrapper>
          <RevealWrapper duration={3000} origin="right">
            <p className="pb-3 text-gray-500 font-medium border-b-2 border-gray-300 border-opacity-75">
              with great problem-solving abilities within the field I work in,
              even under high-pressure conditions. I have experience in web and
              mobile system development. I consider myself a very responsible,
              dynamic, adaptable, and creative person.
            </p>
          </RevealWrapper>
          <div className="flex items-center mt-3">
            <RevealWrapper duration={3200} origin="right">
              <p className="pl-4 text-2xl font-bold">2+</p>
              <p className="pl-4 text-gray-500 ">Years of Experience</p>
            </RevealWrapper>
            <RevealWrapper duration={3400} origin="right">
              <p className="pl-4 text-2xl font-bold">3+</p>
              <p className="pl-4 text-gray-500 ">Happy Customers</p>
            </RevealWrapper>
            <RevealWrapper duration={3600} origin="right">
              <p className="pl-4 text-2xl font-bold">5+</p>
              <p className="pl-4 text-gray-500 ">Success Projects</p>
            </RevealWrapper>
          </div>
          <RevealWrapper duration={3600} origin="bottom">
            <a className="flex items-center rounded-lg bg-violet-500 p-5 text-white my-4 w-fit" href="/documents/CV_AcxelAmbrosi.pdf" download>Download CV
              <FaDownload className="ml-2" />
            </a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};
