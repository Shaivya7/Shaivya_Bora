import { useState } from 'react';

const Home = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#intro" className="text-xl font-bold text-gray-900">Shaivya Bora</a>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}
                      className={`${activeSection === 'intro' ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900`}>
                      Home
                    </a>
                </li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                      className={`${activeSection === 'about' ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900`}>
                      About
                    </a>
                </li>
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                      className={`${activeSection === 'projects' ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900`}>
                      Projects
                    </a>
                </li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                      className={`${activeSection === 'contact' ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900`}>
                      Contact
                    </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="intro" className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900">Building Products with Purpose & Passion</h1>
          <p className="mt-4 text-xl text-gray-600">Product manager focused on creating delightful user experiences</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600">Product manager with experience in fintech, media and ad tech.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be added here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
          <p className="mt-4 text-gray-600">Let's connect and discuss opportunities</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Shaivya Bora. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="mailto:shaivya7.7bora@gmail.com" className="text-gray-600 hover:text-gray-900">
                shaivya7.7bora@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
