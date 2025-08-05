import React from "react";

const shops = [
  {
    name: "Adidas",
    cashback: "5% Cashback",
    link: "https://example.com/adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
  },
  {
    name: "Nike",
    cashback: "4% Cashback",
    link: "https://example.com/nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
  },
  {
    name: "Public",
    cashback: "3% Cashback",
    link: "https://example.com/public",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Public_logo.svg"
  },
  {
    name: "ASOS",
    cashback: "4.5% Cashback",
    link: "https://example.com/asos",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/ASOS_logo.svg"
  },
  {
    name: "Spitishop",
    cashback: "8% Cashback",
    link: "https://example.com/spitishop",
    logo: "https://via.placeholder.com/100x50?text=Spitishop"
  },
  {
    name: "Box Now",
    cashback: "20% Cashback",
    link: "https://example.com/boxnow",
    logo: "https://thevape.gr/wp-content/uploads/2024/09/boxnow-logo3.webp"
  },
  {
    name: "e-shop",
    cashback: "1.6% Cashback",
    link: "https://example.com/eshop",
    logo: "https://via.placeholder.com/100x50?text=e-shop"
  },
  {
    name: "Notino",
    cashback: "4% Cashback",
    link: "https://example.com/notino",
    logo: "https://via.placeholder.com/100x50?text=Notino"
  },
  {
    name: "Benetton",
    cashback: "10% Cashback",
    link: "https://example.com/benetton",
    logo: "https://via.placeholder.com/100x50?text=Benetton"
  },
  {
    name: "Ekdromi.gr",
    cashback: "7% Cashback",
    link: "https://example.com/ekdromi",
    logo: "https://via.placeholder.com/100x50?text=Ekdromi"
  }
];

export default function Smartcashly() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#008e45] text-white p-6 text-2xl font-bold text-center">
        Smartcashly
      </header>

      <section className="p-6 text-center">
        <h2 className="text-3xl font-semibold mb-2">
          Προσφορές & Εκπτώσεις από τα αγαπημένα σας καταστήματα
        </h2>
        <p className="text-lg text-gray-600">
          Cashback + Κουπόνια σε πάνω από 1000 καταστήματα
        </p>
      </section>

      <main className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {shops.map((shop) => (
          <div key={shop.name} className="border rounded-2xl shadow p-4 text-center">
            <img
              src={shop.logo}
              alt={shop.name}
              className="h-16 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-medium mb-2">{shop.name}</h3>
            <p className="text-red-500 font-semibold mb-2">{shop.cashback}</p>
            <a
              href={shop.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008e45] text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Go to Shop
            </a>
          </div>
        ))}
      </main>

      <footer className="text-center text-sm text-gray-500 p-4">
        © {new Date().getFullYear()} Smartcashly. All rights reserved.
      </footer>
    </div>
  );
}
