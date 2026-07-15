function CertificateCard({ certificate }) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col hover:bg-zinc-800 hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img
        src={certificate.image}
        alt={certificate.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-white font-semibold text-center">
          {certificate.name}
        </h3>
      </div>
    </div>
  );
}

export default CertificateCard;
