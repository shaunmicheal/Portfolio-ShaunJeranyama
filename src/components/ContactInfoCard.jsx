function ContactInfoCard({ item }) {
  return (
    <a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="bg-zinc-900 rounded-2xl p-5 flex flex-col gap-1 hover:bg-zinc-800 hover:-translate-y-1 transition duration-300 cursor-pointer"
    >
      <p className="text-white font-semibold">{item.label}</p>
      <p className="text-gray-400 text-sm">{item.value}</p>
    </a>
  );
}

export default ContactInfoCard;
