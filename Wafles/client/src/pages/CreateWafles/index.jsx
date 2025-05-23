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
      <h1>Create your wafle</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-6">Vytvoř si vlastní wafli 🧇</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleInput("name", e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mt-2"
        />

        <div>
          <h3 className="text-xl font-semibold mb-2">1. Vyber marmeládu</h3>
          <div className="grid grid-cols-3 gap-4">
            {["jahodová", "meruňková", "borůvková"].map((marmelada) => (
              <button
                type="button"
                key={marmelada}
                className={`rounded-2xl border-2 p-4 text-lg font-medium transition-all ${
                  formData.marmelada === marmelada
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                }`}
                onClick={() => handleInput("marmelada", marmelada)}
              >
                {marmelada}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">2. Chceš šlehačku?</h3>
          <div className="flex gap-4">
            {["ano", "ne"].map((val) => (
              <button
                type="button"
                key={val}
                className={`rounded-2xl border-2 px-6 py-3 text-lg font-medium transition-all ${
                  formData.slehacka === val
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                }`}
                onClick={() => handleInput("slehacka", val)}
              >
                {val === "ano" ? "Ano 🧁" : "Ne"}
              </button>
            ))}
          </div>
        </div>

        {formData.slehacka === "ano" && (
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Vyber ovoce na šlehačku
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {["jahody", "maliny", "borůvky"].map((ovoce) => (
                <button
                  type="button"
                  key={ovoce}
                  className={`rounded-2xl border-2 p-4 text-lg font-medium transition-all ${
                    formData.ovoce === ovoce
                      ? "bg-yellow-100 border-yellow-500"
                      : "border-gray-300 hover:border-yellow-400"
                  }`}
                  onClick={() => handleInput("ovoce", ovoce)}
                >
                  {ovoce}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold mb-2">4. Vyber sušenku</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Lotus", "Oreo", "BeBe"].map((susenka) => (
              <button
                type="button"
                key={susenka}
                className={`rounded-2xl border-2 p-4 text-lg font-medium transition-all ${
                  formData.susenka === susenka
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                }`}
                onClick={() => handleInput("susenka", susenka)}
              >
                {susenka}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-xl text-lg hover:bg-yellow-600 transition-all"
        >
          Odeslat objednávku
        </button>
      </form>
    </>
  );
}
