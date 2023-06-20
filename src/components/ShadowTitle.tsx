'use client'
import { RevealWrapper } from "next-reveal";

interface Props {
  title: string;
}
export default function ShadowTitle({ title }: Props) {
  return (
    <RevealWrapper duration={2000} origin="bottom">
      <div className="flex justify-center">
        <p className="absolute font-bold text-black text-opacity-20 text-5xl ">
          {title}
        </p>
        <h2 className="text-4xl text-shadow-sm p-12  text-black "> {title}</h2>
      </div>
    </RevealWrapper >
  );
}
