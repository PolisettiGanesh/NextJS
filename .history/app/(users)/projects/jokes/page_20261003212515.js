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
                <div className="max-w-md p-8 bg-amber-200 border-2 border-slate-600 rounded-lg shadow-blue-400 shadow-md">
                <div className="text-6xl mb-4">☕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Random Jokes Generator
          </h2>
                </div>
            </div>
        </>
    )
}

export default RandomJokes;
