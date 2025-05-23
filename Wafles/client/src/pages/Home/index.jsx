import Footer from "@/components/Footer";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div
  className="w-full h-full bg-cover "
  style={{
    backgroundImage:
      "url('https://www.transparenttextures.com/patterns/cream-pixels.png')",
    backgroundColor: "#FFF8DC",
    backgroundRepeat: "repeat",
  }}
>

<div className="flex flex-col items-center justify-center text-center">
      <div className="mt-4 mb-10">
        <h1
          className="font-bold text-yellow-700 drop-shadow-lg"
          style={{ fontSize: "5rem", lineHeight: "1.1" }}
        >
          🧇 Wafles Paradise 🧇
        </h1>
        <p className="mt-4 text-yellow-800 text-lg font-medium max-w-md mx-auto">
          Vyber si, vytvoř si a objednej si svou dokonalou kombinaci.
        </p>
      </div>

      <header className="mt-4 mb-100">
        <nav className="flex space-x-6 justify-center">
          <Link to="/">
            <p className="text-yellow-800 font-medium hover:underline hover:text-yellow-600 cursor-pointer">
              Domů
            </p>
          </Link>
          <Link to="/create-wafles">
            <p className="text-yellow-800 font-medium hover:underline hover:text-yellow-600 cursor-pointer">
              Vytvořit wafli
            </p>
          </Link>
          <Link to="/favorite-wafles">
            <p className="text-yellow-800 font-medium hover:underline hover:text-yellow-600 cursor-pointer">
              Oblíbené
            </p>
          </Link>
          <Link to="/orders">
            <p className="text-yellow-800 font-medium hover:underline hover:text-yellow-600 cursor-pointer">
              Objednávky
            </p>
          </Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link to="/create-wafles">
          <div className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-2xl shadow-md transition transform hover:scale-105 cursor-pointer">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              ➕ Vytvořit wafli
            </h2>
            <p className="text-yellow-700">
              Navrhněte si vlastní wafli podle své chuti!
            </p>
          </div>
        </Link>

        <Link to="/favorite-wafles">
          <div className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-2xl shadow-md transition transform hover:scale-105 cursor-pointer">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              ⭐ Oblíbené wafle
            </h2>
            <p className="text-yellow-700">
              Znovu si pochutnejte na oblíbených kombinacích.
            </p>
          </div>
        </Link>

        <Link to="/orders">
          <div className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-2xl shadow-md transition transform hover:scale-105 cursor-pointer">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              📜 Moje objednávky
            </h2>
            <p className="text-yellow-700">
              Zkontrolujte nebo spravujte své předchozí objednávky.
            </p>
          </div>
        </Link>
      </div>

      <Footer></Footer>
    </div>
    </div>
    </>
  );
}
