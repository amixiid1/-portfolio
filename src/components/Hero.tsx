export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-7xl font-black text-black tracking-tight mb-6">
          Hi, I'm a <span className="text-green-600">Developer</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          I build simple, clean, and efficient digital solutions that help businesses grow and succeed in the modern world.
        </p>
        <button
          onClick={scrollToServices}
          className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 transition-colors cursor-pointer"
        >
          View Services
        </button>
      </div>
    </section>
  );
}
