'use client';
import { useEffect, useState } from 'react';
const RandomJokes = () => {
  const [randomJokes, setRandomJokes] = useState({});
  const [showJokes, setShowJokes] = useState(true);

  const URL = 'https://official-joke-api.appspot.com/random_joke';
  const fetchRandomJokes = async () => {
    const res = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    );
    const data = await res.json();
    console.log(data);
    setRandomJokes(data);
  };
  useEffect(() => {
    fetchRandomJokes();
  }, []);
  return (
    <>
      <div className="min-h-screen w-full bg-white flex justify-center items-center">
        <div className="max-w-md p-8 bg-amber-200 border-2 border-slate-600 rounded-lg shadow-blue-400 shadow-md">
          <div className="text-6xl mb-4 text-center">☕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Random Jokes Generator
            <div className="space-y-4">
              <p className="text-lg text-gray-700 font-medium">
                {randomJokes.setup}
                </p>
                {showJokes ? (
                  <button
                    onClick={() => setShowJokes(false)}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md cursor-pointer hover:shadow-lg"
                  >
                    Reveal Punchline
                  </button>
                ) : (
                  <div className="animate-fade-in">
                    <p className="text-xl text-amber-700 font-bold bg-amber-50 p-4 rounded-lg border-2 border-amber-200 ">
                      {randomJokes.punchline} 😄
                    </p>
                    <button
                      onClick={() => setShowJokes(true)}
                      className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      Hide Punchline
                    </button>
                  </div>
                )}
              </p>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
};

export default RandomJokes;
