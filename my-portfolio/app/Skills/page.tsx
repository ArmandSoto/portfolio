"use client"

import { useEffect, useState } from "react";

export default function Skills(){
    const skillsList: string[] = ["Photoshop.", "Illustrator."];
    const [skill, showSkill] = useState<string>("");

    return (
        <div className={`border-2 white text-neon-white flex flex-col items-center space-y-64 w-screen h-screen `}>
            {/* top */}
            <div className="flex font-extrabold text-9xl black text-center self-end">
                <h2 className="transition-opacity duration-3000 ease-out">Photoshop.</h2>
            {/* bottom */}
            </div>            
            <div className="flex font-extrabold text-9xl black text-center self-start">
                <h2 className="transition-opacity duration-3000 ease-out">Illustrator.</h2>

            </div>

        </div>
    )
}