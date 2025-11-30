"use client"

import Link from "next/link";

export default function Navbar(){

    const linkStyle:string = "px-4 py-2 hover:bg-[#3eb489] hover:text-white transition";


    return(
        <nav className={`flex white w-full ml-auto space-x-32 p-2 items-center text-lg white`}>
            
                <Link href="#skills" className={`${linkStyle}`}>Skills</Link>
                <Link href="/projects" className={`${linkStyle}`}>Projects</Link>
                <Link href="/contact" className={`${linkStyle}`}>Contact</Link>
        </nav>
    );
}