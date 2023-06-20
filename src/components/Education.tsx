'use client'
import CardEducation from "./CardEducation";
import ShadowTitle from "./ShadowTitle";
import { RevealWrapper } from "next-reveal";
import { EDUCATION } from "@/config/Education.config";

export default function Education() {
  return (
    <section className="flex flex-col items-center justify-center pt-20" id="education">
      <ShadowTitle title="Education" />
      <RevealWrapper origin="bottom" duration={2000} >
        <div className=" flex flex-col w-full min-w-0 break-words  ">
          <div className="flex-auto py-5">
            <div className="tab-content tab-space">
              <div className="flex-wrap justify-center sm:flex ">
                {
                  EDUCATION.map((education) =>
                  (<CardEducation
                    img={education.img}
                    type={education.type}
                    title={education.title}
                    entity={education.entity}
                    date={education.date}
                    uri={education.uri}
                  />)
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section >
  );
}
