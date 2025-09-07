"use client"

import {useState} from "react";
import Link from "next/link";

export default function Navbar(){

    return(
        <nav className={`flex w-3/8 ml-auto space-x-6 pt-4 pb-2 pr-4 font-thin items-center border-b-2 justify-end text-neon text-sm font-extralight`}>
                <Link href="/home">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
        </nav>
    );
}