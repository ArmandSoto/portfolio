"use client"

import {useState} from "react";
import Link from "next/link";

export default function Navbar(){

    const linkStyle:string = "px-4 py-2 hover:bg-[#3eb489] hover:text-white transition";


    return(
        <nav className={`flex w-3/8 border-b-1 white w-full ml-auto space-x-6 pt-1 pb-1 pr-4 items-center justify-end text-lg text-neon-white`}>
            
                <Link href="/home" className={`${linkStyle}`}>Home</Link>
                <Link href="/projects" className={`${linkStyle}`}>Projects</Link>
                <Link href="/contact" className={`${linkStyle}`}>Contact</Link>
        </nav>
    );
}