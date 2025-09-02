"use client"

import { useEffect, useState } from "react";



export default function Home() {
  const titleList = ["Data Expert", "Programmer", "Designer"];
  const [title, setTitle] = useState("");

  useEffect(()=> {
    let totalDelay = 0; // acts as the *alarm* of when to start typing the next word
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
    <div className="">
      <div className="flex m-auto w-1/2 h-1/2 font-extrabold text-6xl">
        <h1>
          {title}
        </h1>    
      </div>
    </div>
  );
}
