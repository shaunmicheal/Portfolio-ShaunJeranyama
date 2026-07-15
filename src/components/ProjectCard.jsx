function ProjectCard({ project }) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 hover:bg-zinc-800 transition duration-300 cursor-pointer">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-white">{project.name}</h3>

        <div className="flex flex-wrap gap-2">
          {project.languages.map((lang, index) => (
            <span
              key={index}
              className="bg-purple-600/20 text-purple-400 text-sm px-3 py-1 rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
