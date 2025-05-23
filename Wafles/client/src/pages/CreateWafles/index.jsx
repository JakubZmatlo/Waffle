import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Createwafle() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      ...formData,
      _id: Date.now().toString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    navigate(`/created-wafle/${newOrder._id}`);
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cream-pixels.png')",
          backgroundColor: "#FFF8DC",
          backgroundRepeat: "repeat",
        }}
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-yellow-600 mb-8">
            Vytvoř si vlastní wafli 🧇
          </h1>

          <h3 className="text-3xl font-bold text-yellow-600 mb-8">
            Podle vaši chuti
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => handleInput("name", e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mt-2"
          />

          <div>
            <h3 className="text-xl text-4xl font-bold text-yellow-600 mb-8">
              1. Vyber marmeládu
            </h3>
            <div className="grid grid-cols-4 gap-4 text-white">
              {["jahodová", "višnová", "nutela", "rybízová" ].map((marmelada) => {
                const isSelected = formData.marmelada === marmelada;
                return (
                  <button
                    type="button"
                    key={marmelada}
                    className={`relative rounded-2xl border-2 p-4 text-lg font-medium transition-all ${
                      isSelected
                        ? "border-yellow-500 shadow-lg"
                        : "border-gray-300 hover:border-yellow-400"
                    }`}
                    style={{
                      backgroundColor: isSelected ? "#9C651B" : "#B7791F",
                    }}
                    onClick={() => handleInput("marmelada", marmelada)}
                  >
                    {marmelada}
                    {isSelected && (
                      <span className="absolute top-1 right-2 text-white text-xl "></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-600 mb-8">
              2. Chceš šlehačku?
            </h3>
            <div className="grid grid-cols-2 gap-4 text-white">
              {["ano", "ne"].map((val) => {
                const isSelected = formData.slehacka === val;
                return (
                  <button
                    type="button"
                    key={val}
                    className={`relative rounded-2xl border-2 px-6 py-3 text-lg font-medium transition-all ${
                      isSelected
                        ? "border-yellow-500 shadow-lg"
                        : "border-gray-300 hover:border-yellow-400"
                    }`}
                    style={{
                      backgroundColor: isSelected ? "#9C651B" : "#B7791F",
                    }}
                    onClick={() => handleInput("slehacka", val)}
                  >
                    {val === "ano" ? "Ano 🧁" : "Ne"}
                    {isSelected && (
                      <span className="absolute top-1 right-2 text-white text-xl"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {formData.slehacka === "ano" && (
            <div>
              <h3 className="text-xl text-4xl font-bold text-yellow-600 mb-8">
                3. Vyber ovoce na šlehačku
              </h3>
              <div className="grid grid-cols-3 gap-4 text-white">
                {["jahody", "maliny", "borůvky"].map((ovoce) => {
                  const isSelected = formData.ovoce === ovoce;
                  return (
                    <button
                      type="button"
                      key={ovoce}
                      className={`relative rounded-2xl border-2 p-4 text-lg font-medium transition-all ${
                        isSelected
                          ? "border-yellow-500 shadow-lg"
                          : "border-gray-300 hover:border-yellow-400"
                      }`}
                      style={{
                        backgroundColor: isSelected ? "#9C651B" : "#B7791F",
                      }}
                      onClick={() => handleInput("ovoce", ovoce)}
                    >
                      {ovoce}
                      {isSelected && (
                        <span className="absolute top-1 right-2 text-white text-xl"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xl text-4xl font-bold text-yellow-600 mb-8">
              4. Vyber sušenku
            </h3>
            <div className="grid grid-cols-3 gap-4 text-white">
              {["Lotus", "Oreo", "BeBe"].map((susenka) => {
                const isSelected = formData.susenka === susenka;
                return (
                  <button
                    type="button"
                    key={susenka}
                    className={`relative rounded-2xl border-2 p-4 text-lg font-medium transition-all ${
                      isSelected
                        ? "border-yellow-500 shadow-lg"
                        : "border-gray-300 hover:border-yellow-400"
                    }`}
                    style={{
                      backgroundColor: isSelected ? "#9C651B" : "#B7791F",
                    }}
                    onClick={() => handleInput("susenka", susenka)}
                  >
                    {susenka}
                    {isSelected && (
                      <span className="absolute top-1 right-2 text-white text-xl"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-xl text-lg hover:bg-yellow-600 transition-all"
            style={{ backgroundColor: "#B7791F" }}
          >
            Odeslat objednávku
          </button>
        </form>
      </div>
    </>
  );
}
