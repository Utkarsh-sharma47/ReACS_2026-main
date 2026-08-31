import { StepForward } from "lucide-react"

const TimeLine = () => {
    const FirstPhaseEvents = [
        {
            oldDate: "01 March, 2026",
            label: "Paper Submission Open",
        },
        {
            // oldDate: "30 April, 2026",
            oldDate: "15 May, 2026",
            label: "Paper Submission Deadline",
            done: false,
        },
        {
            oldDate: "30 June, 2026",
            newDate: "7 July, 2026",
            label: "Acceptance Notification",
            done: false,
        },
        // {   
        //     oldDate: "21 July, 2025",
        //     label: "Early Bird Registration Deadline",
        //     done: false,
        // },
        {
            // oldDate: "15 July, 2026",
            newDate: "21 July 2026",
            label: "Early Bird Registration Deadline",
            done: false,
        },
        {
            // oldDate: "15 July, 2026",
            newDate: "30 July 2026",
            label: "Camera Ready Submission",
            done: false,
        },

    ];

    const SecondPhaseEvents = [
        {
            // oldDate: "07 June, 2025",
            newDate: "16 May, 2026",
            label: "Paper Submission Open",
        },
        {
            // oldDate: "07 July, 2025",
            // oldDate: "20 July, 2025",
            oldDate: "15 July, 2026",
            newDate: "31 July, 2026",
            label: "Paper Submission Deadline",
        },
        {
            oldDate: "31 August, 2026",
            newDate: "10 September, 2026",
            label: "Acceptance Notification",
        },
        {
            newDate: "30 September, 2026",
            label: "Camera Ready Submission",
        },
    ];

    // const ThirdPhaseEvents = [
    //     {   
    //         oldDate: "02 August, 2025",
    //         label: "Paper Submission Open",
    //     },
    //     {   
    //         // oldDate: "07 July, 2025",
    //         // oldDate: "20 July, 2025",
    //         oldDate: "31 August, 2025",
    //         label: "Paper Submission Deadline",
    //     },
    //     {   
    //         oldDate: "30 September, 2025",
    //         label: "Acceptance Notification",
    //     },
    //     {   
    //         oldDate: "10 October, 2025",
    //         label: "Early Bird Registration Deadline",
    //     },
    //     {   
    //         oldDate: "20 October, 2025",
    //         label: "Camera Ready Submission",
    //     },
    //     {
    //         oldDate: "19-20 December, 2025",
    //         label: "Conference Dates",
    //         done: false,
    //     }
    // ];

    return (
        <div>
            <div className="border-l-3 py-1 border-[#0054B0] relative">

                {/* <div className="pl-5 mb-4 relative">
                    <div className="absolute h-11 left-[14px] text-[#0054B0] transform -translate-x-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" className="w-full h-full">
                        <path 
                            d="M4 8L20 24L4 40L44 24L4 8Z" 
                            fill="#000000" 
                            stroke="#0054B0" 
                            strokeWidth="3"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div>
                    <p className="text-lg font-bold">Third Phase</p>
                </div>     */}
                {/* {ThirdPhaseEvents.map((event, index) => (
                    <div key={index} className="text-sm mb-8 pl-5 relative">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-[#0054B0] rounded-full flex items-center justify-center">
                            <span className="bg-black w-3 h-3 rounded-full"></span>
                        </div>
                        {event.oldDate && (
                            <p className="text-red-500 line-through decoration-2 font-bold">{event.oldDate}</p>
                        )}
                        <p className="text-[#0054B0] font-bold">{event.newDate}</p>
                        <p className="font-bold">{event.label}</p>
                    </div>
                ))} */}


                <div className="pl-5 mb-4 relative">
                    <div className="absolute h-11 left-[14px] text-[#0054B0] transform -translate-x-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" className="w-full h-full">
                            <path
                                d="M4 8L20 24L4 40L44 24L4 8Z"
                                fill="#000000"
                                stroke="#0054B0"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p className="text-lg font-bold">Second Phase</p>
                </div>
                {SecondPhaseEvents.map((event, index) => (
                    <div key={index} className="text-sm mb-8 pl-5 relative">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-[#0054B0] rounded-full flex items-center justify-center">
                            <span className="bg-black w-3 h-3 rounded-full"></span>
                        </div>
                        {event.oldDate && (
                            <p className="text-red-500 line-through decoration-2 font-bold">{event.oldDate}</p>
                        )}
                        <p className="text-[#0054B0] font-bold">{event.newDate}</p>
                        <p className="font-bold">{event.label}</p>
                    </div>
                ))}


                <div className="pl-5 mb-4 relative">
                    <div className="absolute h-11 left-[14px] text-[#0054B0] transform -translate-x-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" className="w-full h-full">
                            <path
                                d="M4 8L20 24L4 40L44 24L4 8Z"
                                fill="#000000"
                                stroke="#0054B0"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p className="text-lg font-bold">First Phase</p>
                </div>
                {FirstPhaseEvents.map((event, index) => (
                    <div key={index} className="text-sm mb-8 pl-5 relative">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-[#0054B0] rounded-full flex items-center justify-center">
                            <span className="bg-black w-3 h-3 rounded-full"></span>
                        </div>
                        {event.oldDate && (
                            <p className="text-red-500 line-through decoration-2 font-bold">{event.oldDate}</p>
                        )}
                        <p className={`${(event.done) ? "line-through decoration-2  text-gray-600" : "text-[#0054B0]"}  font-bold`}>{event.newDate}</p>
                        <p className="font-bold">{event.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TimeLine