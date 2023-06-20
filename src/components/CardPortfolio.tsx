'use client'
import { Portfolio } from "@/config/Portfiolio.config";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";

export const CardPortfolio = ({
  image,
  type,
  title,
  description,
  url,
}: Portfolio) => {
  return (
    <RevealWrapper origin="bottom" duration={2000}>
      <div className="md:mx-4 shadow-xl rounded-lg border-b-2 border-violet-500">
        <Image
          src={image}
          alt="Imagen-Card"
          className="w-full max-w-sm mx-auto mt-6 rounded-t"
        />
        <div className="w-full max-w-sm px-4 py-3 mx-auto  md:mt-0 rounded-b-md  ">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-400 dark:text-gray-400">
                {type}
              </span>
            </div>
            <div>
              <h1 className="mt-2 text-lg font-semibold ">{title}</h1>
              <p className="mt-2 text-sm">{description}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center mt-2 text-gray-700 ">
              <span>View repository:</span>
              <Link
                className="mx-2 cursor-pointer text-honey text-pink-500 dark:text-blue-400 hover:underline hover:text-yellow-300"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                gitHub/
              </Link>
            </div>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
};
