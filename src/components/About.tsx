export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="./por.jpeg" 
              alt="Programmer working" 
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border-4 border-green-600"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-green-600">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a dedicated programmer with a passion for clean code and minimalist design. 
              My goal is to create software that is not only functional but also easy to understand and maintain.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in modern web technologies, I focus on delivering high-quality results 
              that exceed expectations. I believe in the power of simplicity and the beauty of well-crafted code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
