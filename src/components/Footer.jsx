function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 px-16 py-12">
      <div className="flex justify-between max-w-5xl mx-auto">
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold mb-2">Links</h3>
          <a
            href="mailto:shaunjeranyama@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/shaun-takunda-jeranyama-1b07042a6"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shaunmicheal"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold mb-2">Socials</h3>
          <a
            href="https://twitter.com/YOUR-TWITTER"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/YOUR-INSTAGRAM"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            Instagram
          </a>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-gray-500 text-sm">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
