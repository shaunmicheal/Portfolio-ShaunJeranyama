import ProjectCard from "./ProjectCard";
import projects from "./ProjectsData";

function Projects() {
  return (
    <section className="bg-black px-6 md:px-16 py-16 md:py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">Projects</h2>

      <div className="flex flex-col gap-10 max-w-3xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
