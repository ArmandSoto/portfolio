"use client"

import { useEffect, useState } from "react";
import Navbar from "./navbar";

/* when animation is done, fade in all of the other elements and maybe add a bounce */



export default function Home() {
  const titleList: string[] = ["Data Expert", "Programmer", "Designer"];
  const [title, setTitle] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [moveTitle, setMoveTitle] = useState<boolean>(false);

  function fadeInElements(){
    
  }

  // typing effect on load
  useEffect(()=> {
    let totalDelay = 0; // acts as the *alarm* of when to start typing the next word
    const timeouts: NodeJS.Timeout[] = [];
    const intervals: NodeJS.Timeout[] = [];

    //Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev)=> !prev);
    }, 500);
    intervals.push(cursorInterval);

    // loop through each title and apply typing effect
    titleList.forEach((word, index)=>{
      const timeout = setTimeout(() => {
        let charIndex = 0;
        const interval = setInterval(()=>{
          setTitle(word.slice(0, charIndex + 1))
          charIndex++;
          if(charIndex === word.length) {
            clearInterval(interval);

            if (index === titleList.length-1){
              clearInterval(cursorInterval);
              setShowCursor(true);
              setShowNavbar(true);
              setMoveTitle(true);
            }
          }
        }, 150);
        intervals.push(interval);
      }, totalDelay);


      timeouts.push(timeout);

      totalDelay += word.length * 150 + 500;

    })
    
    //also make sure to move it the word to the left and then fade in my
    //face with other elements

    //do cleanup for useEffect
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      intervals.forEach((i) => clearInterval(i));
    }
  

  }, [])

  return (
    <div>
      <div className={`transition-opacity duration-3000 ease-out ${showNavbar ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
      </div>
      
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex m-auto font-extrabold text-9xl text-neon text-center">
        <div className={`${moveTitle ? "transform transition-transform duration-1000 ease-out -translate-x-64" : ""}`}>
          <h1>
            {title}
            <span className={`inline-block ${showCursor ? "" : "opacity-0"}`}>|</span>
          </h1>    
        </div>
      </div>
    </div>
    </div>

  );
}
