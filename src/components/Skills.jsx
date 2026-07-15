import SkillBar from "./SkillBar";
import skills from "./SkillsData";

function Skills() {
  return (
    <section className="bg-black px-6 md:px-16 py-16 md:py-20 flex flex-col items-center min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Skills
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-xl">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
