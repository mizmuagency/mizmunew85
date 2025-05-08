import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, X } from 'lucide-react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  link: string;
  services: string[];
}

const Projects = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const circleRef = useRef<HTMLAnchorElement>(null);

  const services = [
    'Alle',
    'Branding',
    'Web design',
    'Web development',
    'Digital Marketing'
  ];

  const projects: Project[] = [
    {
      id: 'inky-kinky',
      title: 'Inky Kinky',
      description: 'Klares, minimalistisches Design für intuitives Shopping.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/inkyvideo.gif',
      year: '2025',
      link: '/projekte/inky-kinky',
      services: ['Web development', 'Web design', 'Branding', 'Digital Marketing']
    },
    {
      id: 'senica',
      title: 'Senica',
      description: 'Kontraststarkes Design mit präziser Typografie; dezente Animationen schaffe visuelle Tiefe und unterstützen eine klare, fokussierte Führung.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/senica_gif.gif',
      year: '2025',
      link: '/projekte/senica',
      services: ['Web development', 'Web design']
    },
    {
      id: 'dazzleye',
      title: 'DAZZLEYE',
      description: 'Innovative Eyeliner-Sticker für müheloses Augen-Make-up.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/dazzleeye.gif',
      year: '2024',
      link: '/projekte/dazzleye',
      services: ['Web development', 'Web design', 'Branding', 'Digital Marketing']
    }
  ];

  const filteredProjects = selectedService && selectedService !== 'Alle'
    ? projects.filter(project => project.services.includes(selectedService))
    : projects;

  const handleServiceClick = (service: string) => {
    setSelectedService(service === selectedService ? null : service);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current || !isHovering) return;

      const rect = circleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      const maxMove = 60;
      const movement = Math.min(distance / 5, maxMove);
      const angle = Math.atan2(deltaY, deltaX);
      
      const moveX = Math.cos(angle) * movement;
      const moveY = Math.sin(angle) * movement;

      circleRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-[#f5f5f5] flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            {/* Services Dropdown */}
            <div className="relative mb-8">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-2 text-base font-light"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services Filter */}
              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isServicesOpen ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0'}
              `}>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceClick(service)}
                      className={`
                        px-3 py-1.5 rounded-full text-xs transition-all duration-300 border border-black/10
                        ${selectedService === service
                          ? 'bg-gradient-to-r from-[#CE96FB] via-[#FF8FCF] to-[#00C2BA] text-black border-transparent'
                          : 'bg-white/50 backdrop-blur-sm hover:bg-white/60 text-black'
                        }
                      `}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className={`group relative rounded-lg overflow-hidden border border-black/10 bg-white shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer ${
                    expandedProject === project.id ? 'fixed inset-0 m-auto w-[90%] h-[90%] max-w-[1200px] max-h-[800px] z-50' : ''
                  }`}
                >
                  {/* Project Header */}
                  <div className={`absolute top-0 left-0 right-0 p-3 md:p-6 z-10 flex justify-between items-start ${
                    expandedProject === project.id ? 'bg-gradient-to-b from-black/50 to-transparent py-4' : ''
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <ArrowUpRight 
                        className={`w-3 h-3 text-white/70 group-hover:text-white transition-colors ${
                          expandedProject === project.id ? 'hidden' : ''
                        }`}
                      />
                      <span className={`text-white/70 group-hover:text-white transition-colors ${
                        expandedProject === project.id ? 'text-2xl md:text-3xl font-light' : 'text-xs'
                      }`}>
                        {project.title}
                      </span>
                    </div>
                    {expandedProject === project.id ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedProject(null);
                        }}
                        className="text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-xs text-white/70 group-hover:text-white transition-colors">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Project Image */}
                  <div className={`w-full overflow-hidden ${expandedProject === project.id ? 'h-full flex items-center justify-center' : 'aspect-[16/9]'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-contain md:object-cover transform transition-transform duration-700 ${
                        expandedProject === project.id ? 'scale-100 object-contain max-h-[60vh]' : 'group-hover:scale-105'
                      }`}
                    />
                  </div>

                  {/* Service Tags */}
                  <div className={`absolute bottom-0 left-0 right-0 p-3 z-10 flex flex-wrap gap-1.5 ${
                    expandedProject === project.id ? 'hidden' : ''
                  }`}>
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-0.5 text-[10px] bg-white/80 backdrop-blur-sm rounded-full text-black group-hover:bg-black group-hover:text-white transition-all duration-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay with Description */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    expandedProject === project.id ? 'bg-black/80' : 'bg-black/20 group-hover:bg-black/80'
                  }`}>
                    {expandedProject === project.id ? (
                      <div className="w-full h-full flex flex-col items-center justify-end p-8 pb-16">
                        <h3 className="text-white text-2xl md:text-3xl font-light mb-4">{project.title}</h3>
                        <p className="text-white text-center max-w-xl text-base md:text-lg mb-6 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                          {project.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={project.link}
                          className="mt-4 px-6 py-2 bg-white text-black rounded-full text-base hover:bg-gray-100 transition-colors"
                        >
                          View Project Details
                        </Link>
                      </div>
                    ) : (
                      <p className="text-white text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs text-sm leading-tight font-light">
                        {project.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Backdrop when expanded */}
                  {expandedProject === project.id && (
                    <div 
                      className="fixed inset-0 bg-black/70 backdrop-blur-md -z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedProject(null);
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Black Background Section with Circle CTA */}
          <div className="bg-black py-12">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 className="text-white text-base md:text-2xl font-montreal font-bold leading-[0.9] tracking-[-0.02em]">
                  Brauchst du Hilfe bei deinem neuen Projekt?
                </h2>
                
                <div className="flex flex-col items-center">
                  <svg width="0" height="0">
                    <filter id="gooey-black-hole">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
                    </filter>
                  </svg>
                  <Link 
                    ref={circleRef}
                    to="/contact" 
                    className="relative w-[120px] h-[120px] black-hole flex items-center justify-center transition-all duration-300"
                    style={{ transition: 'transform 0.2s ease-out' }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => {
                      setIsHovering(false);
                      if (circleRef.current) {
                        circleRef.current.style.transform = 'translate(0, 0)';
                      }
                    }}
                  >
                    <ul className="gooey-container">
                      <li className="bubble"></li>
                      <li className="bubble"></li>
                      <li className="bubble"></li>
                      <li className="bubble"></li>
                      <li className="bubble"></li>
                      <li className="bubble"></li>
                    </ul>
                    <div className="relative z-30 text-center">
                      <div className="text-white group-hover:text-black text-sm font-bold tracking-tight leading-tight transition-colors">
                        Let's get<br />started
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Projects;