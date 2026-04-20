import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="bg-zinc-900 h-screen flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
        Contador 2.0
      </h1>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={increment}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-8 px-10 rounded-2xl text-6xl transition-all active:scale-90 shadow-lg"
        >
          +
        </button>

        <div className="bg-zinc-800 border-4 border-cyan-600 text-white font-bold py-12 px-16 rounded-3xl text-8xl  text-center shadow-2xl">
          {count}
        </div>

        <button
          onClick={decrement}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-8 px-10 rounded-2xl text-6xl transition-all active:scale-90 shadow-lg"
        >
          -
        </button>
      </div>

      <button
        onClick={reset}
        className="mt-4 bg-zinc-700 hover:bg-red-500 text-white font-bold py-4 px-12 rounded-xl transition-colors uppercase tracking-widest"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
