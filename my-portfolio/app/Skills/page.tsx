"use client"

import { useEffect, useState } from "react";

export default function SkillsRotator(){
    //maybe refactor later into an object to group states

    const [index, setIndex] = useState(0);
    const skillPairs: [string, string][] = 
    [
        ["Photoshop.", "Illustrator."],
        ["Word.", "Excel."],
        ["Analysis", "C/C++"],
    ];


    // useEffect(() =>{
    //     const interval: NodeJS.Timeout = setInterval(()=> {
    //         setIndex((prev) => (prev + 1) % skillPairs.length);
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="flex flex-col relative border-2 bg-white text-black items-center space-y-64 w-screen h-screen">
            {/* top */}
            <div>
            <div className="flex z-10 font-extrabold text-9xl black text-center self-end">
                <h2 className="transition-opacity duration-3000 ease-out">{skillPairs[index][0]}</h2>
            </div>            
            {/* bottom */}
            <div className="flex z-10 font-extrabold text-9xl black text-center self-start">
                <h2 className="transition-opacity duration-3000 ease-out">{skillPairs[index][1]}</h2>
            </div>
            </div>




        </div>
    )
}