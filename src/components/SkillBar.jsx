import { useState, useEffect } from "react";

function SkillBar({ skill }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [skill.percentage]);

  return (
    <div className="flex items-center gap-4">
      <span className="text-white font-semibold w-28">{skill.name}</span>

      <div className="flex-1 bg-zinc-800 rounded-full h-4 overflow-hidden">
        <div
          className="bg-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>

      <span className="text-gray-400 w-12 text-right">{width}%</span>
    </div>
  );
}

export default SkillBar;
