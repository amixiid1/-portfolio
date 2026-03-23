export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and secure websites using the latest industry standards."
    },
    {
      title: "UI Design",
      description: "Crafting clean and intuitive user interfaces that prioritize user experience and accessibility."
    },
    {
      title: "Bug Fixing",
      description: "Identifying and resolving technical issues to ensure your application runs smoothly and reliably."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">My <span className="text-green-600">Services</span></h2>
          <p className="text-lg text-gray-600">Simple solutions for complex problems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="p-10 bg-white border-2 border-black rounded-xl hover:border-green-600 transition-colors group">
              <div className="w-12 h-1 bg-black mb-6 group-hover:bg-green-600 transition-colors"></div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
