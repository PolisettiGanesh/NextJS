'use client'
import { useEffect,useState } from "react"
const RandomJokes = ()=>{

    const URL = 'https://official-joke-api.appspot.com/random_joke'
    const fetchRandomJokes = async ()=>{
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        console.log(res)
    }
    useEffect(()=>{
        fetchRandomJokes();
    },[])
    return(
        <></>
    )
}
