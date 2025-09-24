"use client"

import { useEffect, useState } from "react";

interface Skills {
    software: string[];
    programming: string[];
    soft: string[];
}

// we don't use state here b/c this is only going to be changed by me

const skills: Skills = {
        software: ["Adobe Photoshop", "Adobe Premiere Pro", "Microsoft Word", "Microsoft Excel"],
        programming: ["C/C++", "Java", "Javascript", "Typescript", "Python", "SQL", "HTML", "CSS", "React", "Tailwind", "NextJS"],
        soft: ["Data Analysis", "Communication", "Teamplayer"],

};

export default function SkillsRotator(){

    const allSkills: string[] = Object.values(skills).flat();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true); // control opacity

    useEffect(()=> {
        const interval = setInterval(() => {
            setFade(false); // start fade out
            setTimeout(()=> {
                setCurrentIndex((prev) => (prev + 1) % allSkills.length);
                setFade(true); //fade in nextSkill
            }, 500); // match fade duration
            
        }, 2000);
        return () => clearInterval(interval);
    }, [allSkills.length]);

    return (
        <div className="flex flex-col justify-center relative border-2 bg-white text-black items-center space-y-64 w-screen h-screen">
                <h2 className={`text-8xl font-bold transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0" }`}>{allSkills[currentIndex]}</h2> 
        </div>
    )

}
