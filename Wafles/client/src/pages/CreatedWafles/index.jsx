import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CreatedWafles() {
  const { id } = useParams();
  const [wafle, setWafle] = useState(null);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const found = orders.find(order => order._id === id);
    setWafle(found);
  }, [id]);

  if (!wafle) return <p className="text-center text-red-600 mt-8">Objednávka nenalezena.</p>;

  return (
    <>
    <div className="max-w-md mx-auto mt-12 p-6 bg-yellow-50 rounded-2xl shadow-md border border-yellow-500">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">🧇Vaše wafle🧇</h1>
      <p className="text-center mb-6 text-yellow-800">Vaše objednávka byla úspěšně přijata:</p>
      <ul className="space-y-3 text-lg text-yellow-900">
        <li><strong>Jméno:</strong> {wafle.name || 'Neuvedeno'}</li>
        <li><strong>Marmeláda:</strong> {wafle.marmelada}</li>
        <li><strong>Šlehačka:</strong> {wafle.slehacka}</li>
        <li><strong>Ovoce na šlehačku:</strong> {wafle.ovoce || 'Žádné'}</li>
        <li><strong>Sušenka:</strong> {wafle.susenka}</li>
      </ul>
      <div className="text-center mt-8">
        <Link to="/"
           className= "hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition "
           style={{ backgroundColor: "#B7791F" }}>
           Zpět na domovskou
          
        </Link>
      </div>
    </div>
    </>
  );
}
