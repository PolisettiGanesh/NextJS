'use client'
import { useEffect,useState } from "react"
const RandomJokes = ()=>{

    const URL = 'https://official-joke-api.appspot.com/random_joke'
    const fetchRandomJokes = async ()=>{
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await res.json();
        console.log(data);

    }
    useEffect(()=>{
        fetchRandomJokes();
    },[])
    return(
        <>
            <div className="min-h-screen w-full bg-white flex justify-center items-center">
                <div className=""></div>
            </div>
        </>
    )
}

export default RandomJokes;
