import CertificateCard from "./CertificatesCards";
import certificates from "./CertificatesData";

function Certificates() {
  return (
    <section className="bg-black px-6 md:px-16 py-16 md:py-20 min-h-screen">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
