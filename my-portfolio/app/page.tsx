"use client";

import { useEffect, useState } from "react";
import SkillsRotator from "./components/SkillsRotator";
import Navbar from "./components/navbar";


/* when animation is done, fade in all of the other elements and maybe add a bounce */

export default function Home() {
  const titleList: string[] = ["Data Expert", "Programmer", "Designer"];
  const [title, setTitle] = useState<string>("");
  // consider the things that will be shown as an object
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [moveTitle, setMoveTitle] = useState<boolean>(false);
  const [showProfilePic, setShowProfilePic] = useState<boolean>(false);

  // typing effect on load
  useEffect(() => {
    let totalDelay = 0; // acts as the *alarm* of when to start typing the next word
    const timeouts: NodeJS.Timeout[] = [];
    const intervals: NodeJS.Timeout[] = [];

    //Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    intervals.push(cursorInterval);

    // loop through each title and apply typing effect
    titleList.forEach((word, index) => {
      const timeout = setTimeout(() => {
        let charIndex = 0;
        const interval = setInterval(() => {
          setTitle(word.slice(0, charIndex + 1));
          charIndex++;
          if (charIndex === word.length) {
            clearInterval(interval);

            if (index === titleList.length - 1) {
              clearInterval(cursorInterval);
              setShowCursor(true);
              setShowNavbar(true);
              setMoveTitle(true);
              setShowProfilePic(true);
            }
          }
        }, 150);
        intervals.push(interval);
      }, totalDelay);

      timeouts.push(timeout);

      totalDelay += word.length * 150 + 500;
    });

    //do cleanup for useEffect
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      intervals.forEach((i) => clearInterval(i));
    };
  }, []);

  return (
    <>
      {/*Navbar fade-in*/}
      <div
        className={`transition-opacity duration-3000 ease-out ${
          showNavbar ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
      </div>

      {/* ------------ LAYERED SECTIONS ----------- */}

      {/*container for layered sections */}
      <div className="min-h-screen overflow-auto relative"> 
        {/*Hero Section */}
        <div className="h-screen relative w-screen z-0 flex items-center justify-center">
          <div
            className={`relative flex font-extrabold text-9xl text-neon text-center ${
              moveTitle
                ? "transform transition-transform duration-1000 ease-out -translate-x-54"
                : ""
            }`}
          >
            <h1>
              {title}
              <span className={`inline-block ${showCursor ? "" : "opacity-0"}`}>
                |
              </span>
            </h1>
          </div>
          <img
            src="/Google Profile Picture.jpg"
            alt="Profile"
            className={`w-84 h-84 rounded-full object-cover absolute right-30 transition-opacity border-[#3eb489] border-4 duration-2000 ease-in ${
              showProfilePic ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      {/* Skills Section white background */}
         <section className="h-screen z-10 bg-white z-10 flex items-center" id="skills">
            <SkillsRotator />
          </section> 
      </div>



      {/* ------------ LAYERED SECTIONS ----------- */}
    </>
  );
}
