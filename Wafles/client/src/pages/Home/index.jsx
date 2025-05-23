import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cream-pixels.png')",
        backgroundColor: "#FFF8DC", // světlá krémová
        backgroundRepeat: "repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-yellow-600 mb-8">🧇 Wafles 🧇</h1>

      <div className="flex flex-col space-y-4">
        <Link to="/create-wafles">
          <button
            className="text-white font-semibold py-3 px-6 rounded-xl transition"
            style={{ backgroundColor: "#B7791F" }}
          >
            Create wafles
          </button>
        </Link>
        <Link to="/favorite-wafles">
          <button
            className="text-white font-semibold py-3 px-6 rounded-xl transition"
            style={{ backgroundColor: "#B7791F" }}
          >
            Favorite wafles
          </button>
        </Link>
        <Link to="/orders">
          <button
            className="text-white py-2 px-4 rounded transition"
            style={{ backgroundColor: "#B7791F" }}
          >
            Zobrazit všechny objednávky
          </button>
        </Link>
      </div>
    </div>
  );
}
