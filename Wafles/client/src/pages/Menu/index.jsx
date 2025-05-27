import React from 'react'
import Header from '@/components/Header';

const wafleMenu = [
  {
    name: "Klasická jahodová",
    image: "/WafleMenu1NoBG.png", 
    description: "Jahodová marmeláda, šlehačka, jahody, Oreo",
  },
  {
    name: "Lesní směs deluxe",
    image: "/WafleMenu2NoBG.png",
    description: "Višňová marmeláda, šlehačka, borůvky, BeBe",
  },
  {
    name: "Nutelová radost",
    image: "/WafleMenu3NoBG.png",
    description: "Nutela, bez šlehačky, Lotus sušenka",
  },
  {
    name: "Wafle pro Nebělochy",
    image: "/WafleMenu4NoBG.png",
    description: "Bez marmelády, šlehačka, Oreo",
  },
  {
    name: "Bez marmelády fresh",
    image: "/WafleMenu5NoBG.png",
    description: "Bez marmelády, šlehačka, borůvky, Oreo",
  },
];

export default function Index() {
  const firstRow = wafleMenu.slice(0, 3);
  const secondRow = wafleMenu.slice(3);

  return (
    <>
      <Header className="sticky top-0 bg-yellow-100 z-50 mt-4 mb-5" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-yellow-800 text-center mb-10">Nabídka waflí</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {firstRow.map((wafle, index) => (
            <div 
              key={index} 
              className="bg-yellow-100 rounded-3xl shadow-lg p-4 flex flex-col items-center"
            >
              {wafle.image ? (
                <img
                  src={wafle.image}
                  alt={wafle.name}
                  className="rounded-2xl h-60 w-auto object-cover mb-4"
                />
              ) : (
                <div className="h-32 w-full rounded-2xl bg-yellow-200 flex items-center justify-center mb-4 text-yellow-600">
                  Obrázek není k dispozici
                </div>
              )}
              <h2 className="text-2xl font-semibold text-yellow-900 mb-2 text-center">{wafle.name}</h2>
              <p className="text-yellow-800 text-center">{wafle.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto mt-8 max-w-3xl">
          {secondRow.map((wafle, index) => (
            <div 
              key={index + 3} 
              className="bg-yellow-100 rounded-3xl shadow-lg p-4 flex flex-col items-center"
            >
              {wafle.image ? (
                <img
                  src={wafle.image}
                  alt={wafle.name}
                  className="rounded-2xl h-60 w-auto object-cover mb-4"
                />
              ) : (
                <div className="h-32 w-full rounded-2xl bg-yellow-200 flex items-center justify-center mb-4 text-yellow-600">
                  Obrázek není k dispozici
                </div>
              )}
              <h2 className="text-2xl font-semibold text-yellow-900 mb-2 text-center">{wafle.name}</h2>
              <p className="text-yellow-800 text-center">{wafle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
