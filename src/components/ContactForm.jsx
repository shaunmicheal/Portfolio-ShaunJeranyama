import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 rounded-2xl p-8 flex flex-col gap-5 w-full"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter your name"
        className="bg-zinc-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter your email"
        className="bg-zinc-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        placeholder="Enter your message"
        className="bg-zinc-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
      ></textarea>

      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-500 transition cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
