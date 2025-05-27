import React from 'react'
import Header from '@/components/Header';

const wafleMenu = [
  {
    name: "Klasická jahodová",
    image: "", 
    description: "Jahodová marmeláda, šlehačka, jahody, Oreo",
  },
  {
    name: "Lesní směs deluxe",
    image: "",
    description: "Višňová marmeláda, šlehačka, maliny, BeBe",
  },
  {
    name: "Nutelová radost",
    image: "",
    description: "Nutela, bez šlehačky, Lotus sušenka",
  },
  {
    name: "Bez marmelády fresh",
    image: "",
    description: "Bez marmelády, šlehačka, jahody, Oreo",
  },
    {
    name: "Bez marmelády fresh",
    image: "",
    description: "Bez marmelády, šlehačka, borůvky, Oreo",
  },
    {
    name: "Bez marmelády fresh",
    image: "",
    description: "Bez marmelády, šlehačka, borůvky, Oreo",
  },
];

export default function index() {
  return (
    <>
    <Header className="sticky top-0 bg-yellow-100 z-50 mt-4 mb-5" />
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-yellow-800 text-center mb-10">Nabídka waflí</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {wafleMenu.map((wafle, index) => (
          <div key={index} className="bg-yellow-100 rounded-3xl shadow-lg p-4">
            <img
              src={wafle.image}
              alt={wafle.name}
              className="rounded-2xl h-48 w-full object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-yellow-900 mb-2">{wafle.name}</h2>
            <p className="text-yellow-800">{wafle.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
