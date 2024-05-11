"use client";
import { Pokemon } from "./pages/Pokemon";

export default function Home() {
  return (
    <main className="flex bg-white text-black min-h-screen flex-col  p-24">
     <Pokemon></Pokemon>
    </main>
  );
}
