"use client"

import { useEffect, useState } from "react";

/* when animation is done, fade in all of the other elements and maybe add a bounce */



export default function Home() {
  const titleList = ["Data Expert.", "Programmer.", "Designer."];
  const [title, setTitle] = useState("");

  useEffect(()=> {
    let totalDelay = 0; // acts as the *alarm* of when to start typing the next word

    // loop through each title and apply typing effect
    titleList.forEach((word)=>{
      setTimeout(() => {
        let charIndex = 0;
        const interval = setInterval(()=>{
          setTitle(word.slice(0, charIndex + 1))
          charIndex++;
          if(charIndex === word.length) clearInterval(interval);
        }, 150)
      }, totalDelay);

      totalDelay += word.length * 150 + 500;
    })

  }, [])

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex m-auto font-extrabold text-9xl text-neon text-center">
        <h1>
          {title}
        </h1>    
      </div>
    </div>
  );
}
