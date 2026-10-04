'use client'
import { useEffect,useState } from "react"
const RandomJokes = ()=>{

    const URL = 'https://official-joke-api.appspot.com/random_joke'
    const fetchRandomJokes = async ()=>{
        
    }
    useEffect(()=>{
        fetchRandomJokes();
    },[])
    return(
        <></>
    )
}
