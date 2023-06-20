'use client'
import { Experience } from "@/config/Experience.config";
import { RevealWrapper } from "next-reveal";

export default function CardExperience({
  occupation,
  workingHours,
  time,
  business,
  works,
}: Experience) {
  return (
    <RevealWrapper duration={2000} origin="bottom">
      <div className="p-5  shadow-xl rounded-lg border-b-2 border-violet-500 ">
        <h3 className="my-2 text-xl font-bold">{occupation}</h3>
        <p className="my-2 italic text-gray-600">{workingHours}</p>
        <p className="my-2 text-gray-400 border-b-2 border-gray-300 border-opacity-75">
          {time}
        </p>
        <p className="w-fit my-2 p-2 bg-violet-500 rounded-xl text-white">
          {business}
        </p>
        <p>{works}</p>
      </div>
    </RevealWrapper>
  );
}
