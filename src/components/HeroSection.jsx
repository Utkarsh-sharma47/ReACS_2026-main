import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "./../assets/collegeImg1.svg";
import img2 from "./../assets/collegeImg2.svg";
import ieee_logo from "./../assets/ieee_logo.png";
import ieee from "./../assets/ieee.png";
import iiit_logo from "./../assets/iiit.png";
import { Menu, X, ChevronDown } from "lucide-react";

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);
  const [isMobileCommitteeOpen, setIsMobileCommitteeOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- FIX: Define the toggleMenu function here ---
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    { name: "Call for Papers", path: "/cfp" },
    { name: "Paper Submission", path: "/submission" },
    { name: "Keynote Speakers", path: "/keynote" },
    { name: "About", path: "/about" }
  ];

  const committeeItems = [
    { name: "Organizing Committee", path: "/committee" },
    { name: "International Advisory Committee", path: "/advisory-committee" },
    { name: "Oversight Committee", path: "/oversight-committee" },
  ];

  const slides = [`${img1}`, `${img2}`];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans antialiased relative w-full overflow-visible bg-slate-900">
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .text-glow {
          text-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.3);
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.85); 
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .nav-item {
          transition: all 0.3s ease;
          color: #0f172a; /* Slate 900 for contrast on glass */
          font-weight: 700;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          color: #0284c7; /* Blue 600 */
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="relative min-h-screen flex flex-col">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              className="w-full h-full object-cover"
              src={slide}
              alt="Background"
            />
            {/* Dark Overlay */}
            <div
              className={`absolute inset-0 ${index === 0 ? "bg-slate-900/60" : "bg-slate-900/70"
                }`}
            />
          </div>
        ))}

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50 absolute right-4 top-4">
          <button
            onClick={toggleMenu} // Fixed: Uses the function now
            className="inline-flex items-center justify-center p-2 bg-white rounded-lg text-slate-900 shadow-lg hover:bg-slate-100 transition-all"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 w-full max-w-7xl mx-auto py-12">
          <div className="animate-fade-in-up flex flex-col items-center w-full">
            
            {/* --- MAIN LOGO (Top) --- */}
            <div className="mb-8 transition-transform duration-500 hover:scale-105">
               {/* White Badge Container to blend the logo background */}
               <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/40">
                 <img 
                   src="/iciis_logo.png" 
                   alt="ICIIS Logo" 
                   className="h-24 md:h-32 lg:h-36 w-auto object-contain" 
                 />
               </div>
            </div>

            {/* --- TEXT CONTENT --- */}
            <div className="text-center space-y-4 max-w-6xl mx-auto">
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-white tracking-[0.3em] uppercase text-glow mb-2">
                2026 IEEE 20th
              </p>

              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg"
              >
                International Conference on <br />
                Industrial and Information Systems
              </h1>
            </div>

            {/* --- DATE & VENUE --- */}
            <div className="mt-8 flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-4">
                <span className="h-[2px] w-8 md:w-16 bg-blue-400"></span>
                <p className="text-white font-bold tracking-[0.15em] text-sm md:text-xl uppercase shadow-sm">
                  18-19 December 2026
                </p>
                <span className="h-[2px] w-8 md:w-16 bg-blue-400"></span>
              </div>
              <p className="text-blue-100 font-medium tracking-wider text-sm md:text-lg">
                ABV-IIITM Gwalior, India
              </p>
            </div>

            {/* --- NAVIGATION BAR --- */}
            <nav className="mt-10 w-full max-w-5xl hidden md:block">
              <div className="glass-panel rounded-full px-2 py-2 mx-auto shadow-2xl">
                <div className="flex items-center justify-between text-sm font-bold">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="px-6 py-3 rounded-full nav-item"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCommitteeOpen(true)}
                    onMouseLeave={() => setIsCommitteeOpen(false)}
                  >
                    <button className="px-6 py-3 rounded-full nav-item inline-flex items-center gap-1">
                      Committee
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isCommitteeOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`absolute left-0 mt-2 w-72 rounded-xl shadow-2xl bg-white border border-slate-200 transform transition-all duration-200 origin-top-left ${isCommitteeOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 invisible"}`}>
                      <div className="py-2">
                        {committeeItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* --- BOTTOM LOGOS (Original Colors) --- */}
            <div className="mt-16 w-full flex justify-center">
              {/* White Container to ensure IEEE Blue logos are visible */}
              <div className="backdrop-blur-md rounded-xl px-8 py-4 shadow-lg">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                  <img
                    src={ieee_logo}
                    alt="IEEE Logo"
                    className="h-8 md:h-12 lg:h-14 w-auto object-contain" 
                    // No invert filter here, so it stays Blue
                  />
                  {/* Vertical Separator */}
                  <div className="w-px h-10 bg-slate-300"></div>
                  
                  <img
                    src={iiit_logo}
                    alt="IIIT Logo"
                    className="h-10 md:h-14 lg:h-16 w-auto object-contain"
                  />
                  
                  {/* Vertical Separator */}
                  <div className="w-px h-10 bg-slate-300"></div>

                  <img
                    src={ieee}
                    alt="IEEE Society Logo"
                    className="h-8 md:h-12 lg:h-14 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-6 border-b border-slate-200 bg-slate-50">
              <h2 className="text-2xl font-bold text-slate-900 tracking-wider">
                ICIIS 2026
              </h2>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
                Menu
              </p>
            </div>

            <div className="px-4 py-6 space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors font-bold border-l-4 border-transparent hover:border-blue-600"
                >
                  {item.name}
                </Link>
              ))}

              <div className="space-y-1">
                <button
                  onClick={() => setIsMobileCommitteeOpen(!isMobileCommitteeOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors font-bold border-l-4 border-transparent hover:border-blue-600"
                >
                  <span>Committee</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMobileCommitteeOpen ? "rotate-180 text-blue-700" : "text-slate-500"}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileCommitteeOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="bg-slate-50 rounded-lg py-2 mx-1 border border-slate-200">
                    {committeeItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setIsMobileCommitteeOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block pl-5 pr-4 py-2.5 text-sm font-semibold border-l-2 ml-3 border-transparent text-slate-600 hover:text-blue-700 hover:border-blue-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
            onClick={toggleMenu} // Fixed: Calling the defined function
          ></div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;