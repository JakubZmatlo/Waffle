import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleDelete = (id) => {
    const filteredOrders = orders.filter((order) => order._id !== id);
    setOrders(filteredOrders);
    localStorage.setItem("orders", JSON.stringify(filteredOrders));
  };

  if (orders.length === 0)
    return <p className="text-center mt-8">Zatím nejsou žádné objednávky.</p>;

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-yellow-50 rounded-2xl shadow-md border border-yellow-500">
      <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">
        📜 Objednávky 📜
      </h1>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order._id}
            className="relative border border-yellow-500 rounded p-4 bg-yellow-100 hover:bg-yellow-200 transition"
          >
            <p className="text-yellow-900 font-semibold mb-1">
              <strong>Jméno:</strong> {order.name || "Neuvedeno"}
            </p>
            <Link
              to={`/created-wafle/${order._id}`}
              className="text-yellow-900 font-semibold underline"
            >
              Objednávka #{order._id}
            </Link>
            <div className="mt-2 text-yellow-800">
              <p><strong>Marmeláda:</strong> {order.marmelada}</p>
              <p><strong>Šlehačka:</strong> {order.slehacka}</p>
              <p><strong>Ovoce:</strong> {order.ovoce || "Žádné"}</p>
              <p><strong>Sušenka:</strong> {order.susenka}</p>
            </div>
            <button
              onClick={() => handleDelete(order._id)}
              className="absolute top-2 right-2 text-white py-1 px-3 rounded transition"
              style={{ backgroundColor: "#B7791F" }}
            >
              Smazat
            </button>
          </li>
        ))}
      </ul>
      <Link to="/">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-lg transition mt-6"
          style={{ backgroundColor: "#B7791F" }}
        >
          Zpět na domovskou
        </button>
      </Link>
    </div>
  );
}
