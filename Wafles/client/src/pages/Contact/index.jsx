import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";


export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
    <Header className="sticky top-0 bg-yellow-100 z-50 mt-4 mb-5" />
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-yellow-50 rounded-lg shadow-md space-y-12 relative border border-yellow-500">
      <h1 className="text-4xl font-bold mb-6 mr-70 text-yellow-700">Kontaktujte nás</h1>      
      <p className="mb-4 text-yellow-800 text-lg mr-42">
        Máte otázky nebo potřebujete pomoc? Rádi vám pomůžeme!
      </p>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Vaše jméno"
          className="p-3 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="email"
          placeholder="Váš e-mail"
          className="p-3 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <textarea
          placeholder="Vaše zpráva"
          rows={5}
          className="p-3 rounded border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 transition"
        >
          Odeslat
        </button>
      </form>
    </div>
    </>
  );
}
