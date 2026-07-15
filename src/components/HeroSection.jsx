import { Link } from "react-router-dom";
import MyPic from "../assets/homePics/heroPic.png";
import Resume from "../assets/documents/Shaun Resume.pdf";

function HeroSection() {
  return (
    <section className="bg-black flex items-center justify-between px-16 py-20">
      <div className="flex flex-col gap-4 max-w-xl">
        <p className="text-white text-xl font-semibold">
          HELLO <br /> <br />
          <span className="text-purple-500 text-5xl font-bold">I'M SHAUN</span>
        </p>

        <h1 className="text-4xl font-bold text-white leading-tight">
          Software Engineer & Web Developer
        </h1>

        <p className="text-gray-400">
          I design and build modern, beautiful and high performing websites and
          applications that help brands grow
        </p>

        <div className="flex gap-4 items-center">
          <Link
            to="/projects"
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-500 transition cursor-pointer"
          >
            View Work →
          </Link>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="border border-purple-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:border-purple-500 transition cursor-pointer"
          >
            View CV
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-40 rounded-full"></div>
        <img
          src={MyPic}
          alt="Shaun Jeranyama"
          className="relative w-96 object-contain
      [mask-image:radial-gradient(ellipse_60%_70%_at_center,black_60%,transparent_100%)]
      [-webkit-mask-image:radial-gradient(ellipse_60%_70%_at_center,black_60%,transparent_100%)]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
