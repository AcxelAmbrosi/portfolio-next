import { EXPERIENCE } from "@/config/Experience.config";
import ShadowTitle from "./ShadowTitle";
import ExperienceCard from "./CardExperience";

export default function Experience() {
  return (
    <section className=" flex flex-col items-center justify-center pt-20" id="experience">
      <ShadowTitle title="Experience" />;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center p-4">
        {EXPERIENCE.map((data) => (
          <ExperienceCard
            business={data.business}
            occupation={data.occupation}
            time={data.time}
            workingHours={data.workingHours}
            works={data.works}
          />
        ))}
      </div>
    </section>
  );
}
