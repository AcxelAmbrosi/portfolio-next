'use client'
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { SOCIAL_MEDIA } from "@/config/SociaMedialUrl.config";
import acxel2_photo from "../../public/images/Shape_copy.png";
import Link from "next/link";
import { RevealWrapper } from "next-reveal"
export default function WelcomeBack() {
  const openEmail = () => {
    const mailtoLink = `mailto:${SOCIAL_MEDIA.EMAIL}`;
    window.location.href = mailtoLink;
  }
  return (
    <section className="flex flex-col h-screen justify-center items-center" id="home">
      <div className="flex flex-col justify-center items-center lg:flex-row mt-72 md:mt-0">
        <div className="flex flex-row lg:flex-col justify-center items-center " >
          <RevealWrapper duration={2000} origin="left">
            <Link
              href={SOCIAL_MEDIA.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="m-8 hover:text-violet-500" size={28} />
            </Link>
          </RevealWrapper>
          <RevealWrapper duration={2500} origin="left">
            <Link
              href={SOCIAL_MEDIA.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="m-8 hover:text-violet-500" size={28} />
            </Link>
          </RevealWrapper>
          <RevealWrapper duration={3000} origin="left">
            <Link
              href={SOCIAL_MEDIA.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaLinkedin className="m-8 hover:text-violet-500" size={28} /> </Link> </RevealWrapper>
        </div>
        <div className="flex flex-col md:flex-row  lg:justify-center lg:items-center p-4 ">
          <div className="order-3 md:order-2 md:w-1/2 p-4 max-w-[500px]">
            <RevealWrapper duration={2000} origin="top">
              <h1 className="text-4xl font-semibold my-4">
                Hi, I am <br /> Acxel
              </h1>
            </RevealWrapper>
            <RevealWrapper duration={2000} origin="right">
              <h2 className="text-2xl font-semibold text-gray-500 my-4">
                Software Developer
              </h2>
            </RevealWrapper>
            <RevealWrapper duration={2000} origin="left">
              <p className="text-gray-700 my-4">
                I'm a software engineer based in Ecuador. I have great interest in
                full-stack development, artificial intelligence, human-computer
                interactions, and everything in between.
              </p>
            </RevealWrapper>
            <RevealWrapper duration={2000} origin="bottom">
              <button onClick={openEmail} className="flex items-center rounded-lg bg-violet-500 p-5 text-white my-4">
                Contact Me
                <BsFillArrowRightCircleFill className="ml-2" />
              </button>
            </RevealWrapper>
          </div>
          <div className="order-2 md:order-3 p-4 flex justify-center max-w-[500px]">
            <RevealWrapper duration={2000} origin="bottom">
              <Image loading="lazy" src={acxel2_photo} width={500} height={500} alt="acxel" />
            </RevealWrapper>
          </div>
        </div>
      </div>
      <button className="hidden md:flex justify-center items-center ">
        <Link className="flex items-center justify-center transition-colors duration-300 hover:text-violet-500" href="#about">
          Scroll down <BsArrowDown className="ml-2 animate-bounce" />
        </Link>
      </button>
    </section>
  );
}
