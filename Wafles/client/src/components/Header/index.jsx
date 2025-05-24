import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-100 sticky top-0 z-50 shadow-md rounded-4xl not-even:mb-8">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-8 py-4">
        <div className="text-yellow-700 font-bold text-3xl sm:text-4xl cursor-pointer select-none">
          🧇 Wafles
        </div>

        <button
          className="md:hidden text-yellow-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-yellow-800 font-medium hover:underline hover:text-yellow-600"
          >
            Domů
          </Link>
          <Link
            to="/create-wafles"
            className="text-yellow-800 font-medium hover:underline hover:text-yellow-600"
          >
            Objednat wafli
          </Link>
          <Link
            to="/favorite-wafles"
            className="text-yellow-800 font-medium hover:underline hover:text-yellow-600"
          >
            Oblíbené
          </Link>
          <Link
            to="/orders"
            className="text-yellow-800 font-medium hover:underline hover:text-yellow-600"
          >
            Objednávky
          </Link>
        </nav>

        <button
          style={{ backgroundColor: "#b45309" }}
          className="hidden md:block text-white px-4 py-3 rounded-xl hover:bg-yellow-700 transition"
        >
          Contact
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-yellow-50 px-4 py-4 space-y-4 text-center shadow-md rounded-b-2xl">
          <Link
            to="/"
            className="block text-yellow-700 font-medium hover:text-yellow-600"
            onClick={() => setMenuOpen(false)}
          >
            Domů
          </Link>
          <Link
            to="/create-wafles"
            className="block text-yellow-700 font-medium hover:text-yellow-600"
            onClick={() => setMenuOpen(false)}
          >
            Objednat wafli
          </Link>
          <Link
            to="/favorite-wafles"
            className="block text-yellow-700 font-medium hover:text-yellow-600"
            onClick={() => setMenuOpen(false)}
          >
            Oblíbené
          </Link>
          <Link
            to="/orders"
            className="block text-yellow-700 font-medium hover:text-yellow-600"
            onClick={() => setMenuOpen(false)}
          >
            Objednávky
          </Link>
          <button
            style={{ backgroundColor: "#b45309" }}
            className="w-full mt-2 text-white py-3 rounded-xl hover:bg-yellow-700 transition"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
