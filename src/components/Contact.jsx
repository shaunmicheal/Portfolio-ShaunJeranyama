import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import contactInfo from "./ContactData";

function Contact() {
  return (
    <section className="bg-black px-16 py-20 min-h-screen">
      <h2 className="text-5xl font-bold text-white mb-12 text-center">
        Contact
      </h2>

      <div className="flex gap-12 max-w-5xl mx-auto items-start">
        <div className="flex flex-col gap-4 w-72">
          {contactInfo.map((item) => (
            <ContactInfoCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
