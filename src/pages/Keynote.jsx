import React, { useState, useEffect } from 'react';
import { User, ArrowDown, ArrowUp } from 'lucide-react'; 
import { Footer, Navbar } from "../components/index.js";

const keynoteSpeakers = [
  {
    name: "Prof. Rajeev Shorey",
    dsgn: "Director, Indian Institute of Information Technology Surat, India",
    src: "https://iiitsurat.ac.in/static/media/Director_photo.647269c1a5e495575dce.jpg",
    link: "https://iiitsurat.ac.in/discover/director",
    bio: (
      <>
        <p className="mb-4">
          Prof. Rajeev Shorey is the Director of IIIT Surat and a Fellow of the Indian National Academy of Engineering (INAE) and the Institution of Engineering and Technology (IET), UK. He is also a Distinguished Scientist of the ACM. Before joining IIIT Surat in June 2024, he served as the CEO of the University of Queensland–IIT Delhi Academy of Research (UQIDAR) at IIT Delhi.
        </p>
        <p>
          His distinguished career spans leading research organizations including TCS Research & Innovation, General Motors India Science Laboratory, IBM India Research Laboratory, and SASKEN Technologies. His research has resulted in 80+ international publications and 13 issued US patents. He is also a co-founder and Steering Committee Co-Chair of the international conferences COMSNETS and AIMLSystems.
        </p>
      </>
    )
  },
  {
    name: "Dr. Sunil Kumar",
    dsgn: "Professor and Thomas G. Pine Faculty Fellow, San Diego State University, USA",
    src: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=uf9wmZoAAAAJ&citpid=1",
    link: "https://electrical.sdsu.edu/people/sunil-kumar",
    bio: (
      <>
        <p className="mb-4">
          Dr. Sunil Kumar is a Professor in the Department of Electrical and Computer Engineering at San Diego State University (SDSU). His research expertise includes QoS-aware wireless networks, multimedia communication, error-resilient video compression, and wireless networking. His research has also contributed to areas such as airborne networks, UAV communication, wireless mesh networks, and adaptive networking protocols.
        </p>
        <p>
          Dr. Kumar has received research support from organizations including the U.S. Department of Defense Air Force Research Laboratory and has published extensively in the areas of wireless and multimedia communications.
        </p>
      </>
    )
  },
  {
    name: "Dr. Dmitry Zhdanov",
    dsgn: "State Farm Endowed Chair in Cybersecurity, Illinois State University, USA",
    src: "https://illinois-state-dm-s3.imgix.net/dzhdano/pci/DZ_photo_small1-1.jpg?auto=format&w=150&h=225&crop=faces&fit=crop&fm=jpeg&q=90",
    link: "https://it.illinoisstate.edu/faculty-staff/profile/?ulid=dzhdano",
    bio: (
      <>
        <p className="mb-4">
          Dr. Dmitry Zhdanov is an award-winning educator and researcher specializing in cybersecurity, responsible artificial intelligence, socially responsible computing, and sustainability. He has made significant contributions to cybersecurity and information systems research, with publications in leading journals including MIS Quarterly, Decision Support Systems, and Production and Operations Management. He has also received several awards for excellence in teaching and research.
        </p>
        <p>
          At ICIIS 2026, Dr. Zhdanov will deliver a keynote address on "Cybersecurity and AI: Opportunities and Challenges".
        </p>
      </>
    )
  }
];

function Keynote() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFloatingButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">
      <Navbar />
      
      {/* --- HEADER SECTION --- */}
      <div className="pt-20 pb-10 bg-gradient-to-b from-[#043A75] to-[#022a55] text-white flex flex-col items-center px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-2">
            Keynote Speakers
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="mt-4 text-center text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
          </p>
        </div>
      </div>

      <div className="flex-grow py-12 px-4 md:px-8 max-w-[1000px] mx-auto w-full">
        <div className="space-y-16">
          {keynoteSpeakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
      
      <Footer />

      {/* --- FLOATING ACTION BUTTON --- */}
      <button
        onClick={handleFloatingButtonClick}
        className={`fixed bottom-8 right-8 z-50 bg-blue-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${showScrollUp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        title="Scroll to Top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

    </div>
  );
}

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/3 bg-slate-50 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-full border-2 border-transparent group-hover:border-amber-500/30 transition-all duration-500 scale-110 group-hover:scale-100"></div>
          {speaker.src ? (
            <img 
              src={speaker.src} 
              alt={speaker.name}
              className="w-40 h-40 rounded-full object-cover shadow-md group-hover:shadow-lg transition-all duration-300 filter grayscale-[10%] group-hover:grayscale-0"
              loading="lazy"
            />
          ) : (
            <div className="w-40 h-40 rounded-full bg-slate-200 flex items-center justify-center shadow-md border-2 border-slate-300 group-hover:border-amber-500/20 transition-colors">
               <User className="w-16 h-16 text-slate-400" />
            </div>
          )}
        </div>
        <div className="text-center w-full">
          <h3 className="font-bold text-xl text-[#043A75] mb-2 font-sans group-hover:text-blue-700 transition-colors duration-300">
            {speaker.name}
          </h3>
          <p className="text-sm font-semibold tracking-wide text-amber-700 leading-snug">
            {speaker.dsgn}
          </p>
          {speaker.link && (
            <a href={speaker.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-xs uppercase tracking-wider text-[#043A75] border border-blue-200 bg-blue-50/50 hover:bg-blue-100 font-bold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-sm group-hover:border-blue-300">
              View Profile
            </a>
          )}
        </div>
      </div>
      
      {/* Bio Section */}
      <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center text-slate-700 text-sm md:text-base leading-relaxed text-justify group-hover:text-slate-900 transition-colors duration-300">
        {speaker.bio}
      </div>
    </div>
  );
};

export default Keynote;
