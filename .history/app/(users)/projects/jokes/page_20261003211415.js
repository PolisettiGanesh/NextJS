'use client'
import { useEffect,useState } from "react"
const RandomJokes = ()=>{

    const fetchRandomJokes = async ()=>{
        const URL = 'https://official-joke-api.appspot.com/random_joke'
    }
    useEffect(()=>{
        fetchRandomJokes();
    },[])
    return(
        <></>
    )
}
