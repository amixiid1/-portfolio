export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-2xl font-bold text-black hover:text-green-600 transition-colors cursor-pointer"
            >
              Amixiid
            </button>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-black hover:text-green-600 font-medium transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-black hover:text-green-600 font-medium transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-black hover:text-green-600 font-medium transition-colors cursor-pointer"
            >
              Services
            </button>
          </nav>
          <div className="md:hidden flex items-center">
             <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-green-600">Menu</button>
          </div>
        </div>
      </div>
    </header>
  );
}
