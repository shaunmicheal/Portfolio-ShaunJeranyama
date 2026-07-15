function ExperienceCard({ item }) {
  return (
    <div className="bg-zinc-900 rounded-2xl w-full h-56 p-6 flex flex-col justify-between hover:bg-zinc-800 hover:-translate-y-2 transition duration-300 cursor-pointer">
      <div>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
        <p className="text-purple-400 font-medium mt-1">{item.place}</p>
        <p className="text-gray-500 text-sm mt-1">{item.duration}</p>
      </div>

      <p className="text-gray-400 text-sm">{item.description}</p>
    </div>
  );
}

export default ExperienceCard;
