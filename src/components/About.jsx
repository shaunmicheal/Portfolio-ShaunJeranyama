import AboutPic from "../assets/aboutPic/my pic.jpeg";
import Resume from "../assets/documents/Shaun Resume.pdf";

function About() {
  return (
    <section className="bg-black flex flex-col gap-16 px-6 md:px-16 py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <img
            src={AboutPic}
            alt="Shaun Jeranyama"
            className="w-64 md:w-80 rounded-2xl object-cover animate-float"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-xl text-center md:text-left items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>{" "}
          <br />
          <p className="text-gray-400 text-xl">
            I'm a software development student specializing in full-stack web
            development, currently building projects with Python, React,
            TailwindCss and Javascript.
          </p>
          <ul className="flex flex-col gap-2 text-gray-300 text-left">
            <li>
              <span className="font-semibold text-white">Location:</span>{" "}
              Harare, Zimbabwe
            </li>
            <li>
              <span className="font-semibold text-white">Education:</span>{" "}
              Uncommon Bootcamp
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              shaunjeranyama@gmail.com
            </li>
            <li>
              <span className="font-semibold text-white">Name:</span> Shaun
              Jeranyama
            </li>
            <li>
              <span className="font-semibold text-white">Nationality:</span>{" "}
              Zimbabwean
            </li>
          </ul>
          <a
            href={Resume}
            download="Shaun_Jeranyama_Resume.pdf"
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition w-fit mt-2"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
        <div className="bg-zinc-900 rounded-xl w-40 md:w-48 px-6 md:px-8 py-6 text-center hover:bg-zinc-800 hover:-translate-y-2 transition duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-purple-400">1+</h3>
          <p className="text-gray-400 mt-2">Years Learning</p>
        </div>

        <div className="bg-zinc-900 rounded-xl w-40 md:w-48 px-6 md:px-8 py-6 text-center hover:bg-zinc-800 hover:-translate-y-2 transition duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-purple-400">15+</h3>
          <p className="text-gray-400 mt-2">Projects</p>
        </div>

        <div className="bg-zinc-900 rounded-xl w-40 md:w-48 px-6 md:px-8 py-6 text-center hover:bg-zinc-800 hover:-translate-y-2 transition duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-purple-400">5+</h3>
          <p className="text-gray-400 mt-2">Technologies</p>
        </div>
      </div>
    </section>
  );
}

export default About;
