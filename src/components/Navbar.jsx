import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] = useState(false);
  
  // Mobile state
  const [isMobileCommitteeOpen, setIsMobileCommitteeOpen] = useState(false);
  
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    // { name: "Program Schedule", path: "/schedule" },
    { name: "Call for Papers", path: "/cfp" },
    { name: "Paper Submission", path: "/submission" },
    { name: "Keynote Speakers", path: "/keynote" },
    { name: "About", path: "/about" },
  ];

  const committeeDropdownItems = [
    { name: "Organizing Committee", path: "/committee" },
    { name: "International Advisory Committee", path: "/advisory-committee" },
    { name: "Oversight Committee", path: "/oversight-committee" },
  ];

  // const callsDropdownItems = [
  //   { name: "Call for Papers", path: "/cfp" },
  // ];

  // const dropdownItems = [
  //   { name: "About", path: "/about" },
  //   { name: "Accommodation", path: "/attende" }
  // ];

  // const submissionDropdownItems = [
  //   { name: "Paper Submission", path: "/submission" },
    // { name: "Camera Ready Submission", path: "/crs" },
  // ];

  useEffect(() => {
    setIsOpen(false);
    setIsMobileCommitteeOpen(false);
    setIsCommitteeDropdownOpen(false);
  }, [pathname]);

  // Desktop Link Styles
  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 tracking-wide ${
      isActive 
        ? "text-blue-400 bg-blue-900/30 shadow-[0_0_10px_rgba(59,130,246,0.1)] border border-blue-500/20" 
        : "text-slate-300 hover:text-white hover:bg-white/5"
    }`;

  // Desktop Dropdown Button Styles
  const dropdownBtnClasses = (isOpen) =>
    `px-3 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1.5 transition-all duration-300 tracking-wide ${
      isOpen 
        ? "text-blue-400 bg-blue-900/30" 
        : "text-slate-300 hover:text-white hover:bg-white/5"
    }`;

  // Desktop Dropdown Item Styles
  const dropdownItemClasses = ({ isActive }) =>
    `block px-4 py-2.5 text-sm transition-colors duration-200 border-l-2 ${
      isActive 
        ? "bg-blue-900/20 border-blue-500 text-blue-100" 
        : "border-transparent text-slate-400 hover:bg-white/5 hover:text-white hover:border-slate-500"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b2144] backdrop-blur-md shadow-lg font-sans border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO SECTION (Visible on Mobile & Desktop) --- */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              {/* College Logo with Glow Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src="/iciis_logo.png" 
                  alt="ICIIS 2026 Logo" 
                  className="h-10 md:h-12 w-auto object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                />
              </div>

              {/* Conference Name Text */}
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-shadow-xl transition-colors">
                  ICIIS 2026
                </span>
              </div>
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={navLinkClasses}
              >
                {item.name}
              </NavLink>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsCommitteeDropdownOpen(true)}
              onMouseLeave={() => setIsCommitteeDropdownOpen(false)}
            >
              <button className={dropdownBtnClasses(isCommitteeDropdownOpen)}>
                Committee
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isCommitteeDropdownOpen ? 'rotate-180 text-blue-300' : ''}`} />
              </button>

              <div className={`absolute left-0 mt-2 w-72 rounded-xl shadow-2xl bg-[#1e293b] border border-slate-700 ring-1 ring-black ring-opacity-50 transform transition-all duration-200 origin-top-left ${isCommitteeDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {committeeDropdownItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={dropdownItemClasses}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Submission Dropdown */}
            {/* <div 
              className="relative group"
              onMouseEnter={() => setIsSubmissionDdOpen(true)}
              onMouseLeave={() => setIsSubmissionDdOpen(false)}
            >
              <button className={dropdownBtnClasses(isSubmissionDdOpen)}>
                Submission 
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSubmissionDdOpen ? 'rotate-180 text-blue-300' : ''}`} />
              </button>
              
              <div className={`absolute left-0 mt-2 w-64 rounded-xl shadow-2xl bg-[#1e293b] border border-slate-700 ring-1 ring-black ring-opacity-50 transform transition-all duration-200 origin-top-left ${isSubmissionDdOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {submissionDropdownItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={dropdownItemClasses}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Calls Dropdown */}
            {/* <div 
              className="relative group"
              onMouseEnter={() => setIsCallsDropdownOpen(true)}
              onMouseLeave={() => setIsCallsDropdownOpen(false)}
            >
              <button className={dropdownBtnClasses(isCallsDropdownOpen)}>
                Calls 
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isCallsDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>
              
              <div className={`absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-[#1e293b] border border-slate-700 ring-1 ring-black ring-opacity-50 transform transition-all duration-200 origin-top-left ${isCallsDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {callsDropdownItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={dropdownItemClasses}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div> */}

            {/* More Dropdown */}
            {/* <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={dropdownBtnClasses(isDropdownOpen)}>
                More 
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>
              
              <div className={`absolute right-0 mt-2 w-52 rounded-xl shadow-2xl bg-[#1e293b] border border-slate-700 ring-1 ring-black ring-opacity-50 transform transition-all duration-200 origin-top-right ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {dropdownItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={dropdownItemClasses}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div> */}
          </div>

          {/* --- MOBILE MENU BUTTON (Visible only on Mobile) --- */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN (Clean Vertical List) --- */}
      {/* This renders directly below the navbar when open */}
      <div 
        className={`lg:hidden bg-[#0f172a] border-t border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {/* Standard Links */}
          {mainNavItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border-l-2 ${
                  isActive 
                    ? "border-blue-500 bg-blue-900/20 text-blue-400" 
                    : "border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="space-y-1">
            <button
              onClick={() => setIsMobileCommitteeOpen(!isMobileCommitteeOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
            >
              <span>Committee</span>
              <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isMobileCommitteeOpen ? 'rotate-180 text-blue-400' : 'text-slate-500'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileCommitteeOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-black/20 rounded-lg py-2 mx-2 border border-white/5">
                {committeeDropdownItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block pl-5 pr-4 py-2.5 text-sm font-medium border-l-2 ml-3 ${
                        isActive
                          ? "border-blue-500 text-blue-400 bg-white/5"
                          : "border-transparent text-slate-400 hover:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;