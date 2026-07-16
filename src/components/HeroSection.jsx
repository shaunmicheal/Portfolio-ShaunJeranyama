import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MyPic from "../assets/homePics/heroPic.png";
import Resume from "../assets/documents/Shaun Resume.pdf";

function HeroSection() {
  return (
    <section className="bg-black flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16 py-16 md:py-20">
      <div className="flex flex-col gap-4 max-w-xl text-center md:text-left items-center md:items-start m-5 p-5">
        <p className="text-white text-lg md:text-xl font-semibold">
          HELLO <br /> <br />
          <span className="text-purple-500 text-4xl md:text-5xl font-bold">
            I'M SHAUN
          </span>
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Software Engineer & Web Developer
        </h1>

        <p className="text-gray-400">
          I design and build modern, beautiful and high performing websites and
          applications that help brands grow
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
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

        <div className="flex gap-15 mt-2 pl-20 justify-center md:justify-start">
          <a
            href="https://github.com/shaunmicheal"
            target="_blank"
            rel="noreferrer"
            className="text-white text-2xl hover:text-purple-400 transition cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shaun-takunda-jeranyama-1b07042a6"
            target="_blank"
            rel="noreferrer"
            className="text-white text-2xl hover:text-purple-400 transition cursor-pointer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-40 rounded-full"></div>
        <img
          src={MyPic}
          alt="Shaun Jeranyama"
          className="relative w-64 md:w-96 object-contain p-5 m-5
      [mask-image:radial-gradient(ellipse_60%_70%_at_center,black_60%,transparent_100%)]
      [-webkit-mask-image:radial-gradient(ellipse_60%_70%_at_center,black_60%,transparent_100%)]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
