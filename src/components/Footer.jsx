import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold mb-2">Links</h3>
          <a
            href="mailto:shaunjeranyama@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/shaun-takunda-jeranyama-1b07042a6"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/shaunmicheal"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold mb-2">Socials</h3>
          <a
            href="https://twitter.com/YOUR-TWITTER"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://www.instagram.com/shaunchimaz?utm_source=qr&igsh=MXNoMWkwdGI5ZHZ4dQ=="
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100065155573077&mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
          >
            <FaFacebook /> Facebook
          </a>
        </div>

        <div className="flex flex-col justify-end">
          <h3 className="text-gray-500 text-sm font-bold mb-2">
            © 2026 All Rights Reserved
          </h3>{" "}
          <br />
          <p className="text-gray-500 text-sm">
            Passionate about building modern, responsive and user friendly web
            applications. Always learning. Always creating.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
