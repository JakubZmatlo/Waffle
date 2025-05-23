import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-yellow-600 mb-8">🧇 Wafles 🧇</h1>

      <div className="flex flex-col space-y-4">
        <Link to="/create-wafles">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition">
            Create wafles
          </button>
        </Link>
        <Link to="/create-wafles">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition">
            Favorite wafles
          </button>
        </Link>
        <Link to="/orders">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
            Zobrazit všechny objednávky
          </button>
        </Link>
      </div>
    </div>
  );
}
