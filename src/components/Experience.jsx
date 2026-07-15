import ExperienceCard from "./ExperienceCard";
import experience from "./ExperienceData";

function Experience() {
  return (
    <section className="bg-black px-16 py-20 flex flex-col items-center min-h-screen">
      <h2 className="text-5xl font-bold text-white mb-12 text-center">
        Experience & Education
      </h2>

      <div className="flex flex-col gap-8 w-full max-w-xl">
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
