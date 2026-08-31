import TimeLine from "./Timeline"
import Marquee from "./Marquee"
import { CalendarDays, Layers } from 'lucide-react';

function MainSection() {
    const marqueeUpdates = [
        {
            text: "First Phase Paper Decision emails have been sent to the Authors.",
            url: null
        }
    ];

    const RegularTracks = [
        {
            heading: "Track 1: Image, Signal & Artificial Intelligence",
            content: "This track explores advanced paradigms in Image and Signal Processing alongside the latest breakthroughs in Artificial Intelligence and Machine Learning. It specifically highlights critical areas such as Trustworthy & Explainable AI and Pattern Recognition, aiming to bridge theoretical models with practical, real-world applications in computer vision and signal analysis."
        },
        {
            heading: "Track 2: Embedded & Intelligent Systems",
            content: "Focusing on the intersection of hardware and intelligence, this track covers Embedded System Design and the emerging challenges in Ethical IoT & Smart Devices. It also addresses Data Engineering methodologies and the development of robust Intelligent Systems and Expert Systems, emphasizing efficient computing and intelligent decision-making frameworks."
        },
        {
            heading: "Track 3: Communication & Information Technologies",
            content: "This track offers a comprehensive look at the future of connectivity, featuring research on Wireless Communication Technologies and Secure & Trustworthy Communications. It delves into the convergence of IoT, Networks & Cybersecurity, with a special emphasis on designing Green and Sustainable Communication Systems for the next generation of networks."
        },
        {
            heading: "Track 4: Power, Energy & High Voltage Engineering",
            content: "Addressing global energy challenges, this track presents innovations in Smart Grid Technologies and Renewable Energy Systems. Discussions will center on advanced Power Electronics and strategies for Energy-Efficient High Voltage Engineering, aiming to ensure reliable, sustainable, and resilient power infrastructure."
        },
        {
            heading: "Track 5: Control, Robotics & Automation",
            content: "Highlighting the evolution of automation, this track spans the cutting edge of Robotics and Autonomous Systems and Human-Centric Control Systems. It explores how these technologies are driving Automation for Sustainable Industries, fostering greater efficiency, safety, and adaptability in modern industrial environments."
        },
        {
            heading: "Track 6: FPGA, EDA Tools & VLSI Design",
            content: "Dedicated to the backbone of computing hardware, this track features research on FPGA-based System Design and Secure Hardware architectures. It examines the latest advancements in VLSI and EDA tools, alongside techniques for creating Low-power Hardware Architectures essential for energy-constrained applications."
        },
        {
            heading: "Track 7: RF, Microwave & Photonics",
            content: "Antenna and Radar Systems, Microwave and Terahertz Technologies for Imaging, Millimetre-Wave and Terahertz Circuits, Photonic Integrated Circuits & Plasmonic."
        },
        {
            heading: "Track 8: Data-Driven Technologies",
            content: "Data Engineering and Analytics, Data mining, Data optimization and decision making, Behavioral and Sentiment Analysis."
        }
    ]

    return (
        <div className="font-sans text-slate-800 py-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">


            <Marquee updates={marqueeUpdates} />
            
            {/* --- Welcome Section --- */}
            <div className="mb-8 border-b border-slate-200 pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-4">
                    Welcome to <span className="text-blue-700">ICIIS 2026</span>
                </h1>
                <div className="text-base text-slate-700 leading-snug text-justify max-w-5xl">
                    <p>
                        <span className="font-bold text-slate-900">ICIIS 2026 covers a wide range of engineering disciplines</span>, with added focus on sustainability and trustworthiness. This conference (<a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/71472" className="text-blue-600 underline font-semibold">IEEE Conference ID: 71472</a>) is being organised to function as a platform for dissemination of recent high-quality research work. It covers the wide domain of Computer Science, Electronics, and Electrical Engineering and will provide a means to exchange innovative ideas and recent advances among researchers from academia and industry.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                
                {/* --- Left Column: Tracks --- */}
                <div className="md:w-[70%]">
                    <div className="flex items-center gap-2 mb-4">
                        <Layers className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-[#0f172a]">
                            Conference Tracks
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {RegularTracks.map((item, index) => (
                            <div 
                                key={index} 
                                className="group bg-white rounded-lg p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden"
                            >
                                {/* Professional Left Accent Border */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
                                
                                <h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-2 group-hover:text-blue-700 transition-colors pl-1">
                                    {item.heading}
                                </h3>
                                
                                <p className="text-slate-700 text-sm leading-6 text-justify pl-1 font-medium">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Timeline (Visible only on small screens) */}
                    <div className="md:hidden mt-8 bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-2 mb-3">
                            <CalendarDays className="w-5 h-5 text-blue-600" />
                            <h3 className="text-xl font-bold text-[#0f172a]">Important Dates</h3>
                        </div>
                        <TimeLine />
                    </div>
                </div>

                {/* --- Right Column: Sidebar (Sticky Timeline) --- */}
                <div className="hidden md:block md:w-[30%]">
                    <div className="sticky top-24 space-y-5">
                        <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
                                <CalendarDays className="w-5 h-5 text-blue-600" />
                                <h3 className="text-lg font-bold text-[#0f172a]">Important Dates</h3>
                            </div>
                            
                            {/* Timeline Component Injection */}
                            <div className="text-sm">
                                <TimeLine />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainSection