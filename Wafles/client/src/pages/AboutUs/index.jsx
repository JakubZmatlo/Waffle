import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
    <Header className="sticky top-0 bg-yellow-100 z-50 mt-4 mb-5" />
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-yellow-50 rounded-lg shadow-md space-y-12 relative border border-yellow-500">
      <section>
        <h1 className="text-4xl font-bold text-yellow-700 mb-6">O nás</h1>
        <p className="text-yellow-800 text-lg mb-4">
          Vítejte ve Sweet Waffles místě, kde se vaše sny o dokonalých waflích stávají skutečností! Jsme nadšení milovníci waflí, kteří věří, že každý kousek sladké pochoutky může přinést radost a úsměv.
        </p>
        <p className="text-yellow-800 text-lg mb-4">
          Naše wafle jsou připravovány z těch nejkvalitnějších surovin a můžete si je sestavit přesně podle své chuti vyberte si marmeládu, ovoce, sušenky nebo šlehačku. Naším cílem je nabídnout jedinečný zážitek, který potěší všechny vaše smysly.
        </p>
        <p className="text-yellow-800 text-lg mb-4">
          Jsme tým nadšených cukrářů a designérů, kteří neustále pracují na nových kombinacích a nápadech. Přijďte a ochutnejte wafle plné lásky a vášně!
        </p>
        <p className="text-yellow-800 text-lg font-semibold mt-8">
          Těšíme se na vaši návštěvu!
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-yellow-700 mb-6">Kde nás najdete</h2>
        <p className="text-yellow-800 text-lg mb-4">
          Naše hlavní provozovna se nachází v centru Mladé Boleslavi na adrese:
        </p>
        <address className="not-italic text-yellow-700 font-semibold mb-6">
          Ulice Jaselská, 293 01 Mladá Boleslav
        </address>

        <h3 className="text-2xl font-bold text-yellow-700 mb-3">Kontaktujte nás</h3>
        <ul className="text-yellow-800 text-lg space-y-2">
          <li>Telefon: <a href="tel:+420123456789" className="underline hover:text-yellow-900">+420 123 456 789</a></li>
          <li>Email: <a href="mailto:info@sweetwafles.cz" className="underline hover:text-yellow-900">info@sweetwafles.cz</a></li>
          <li>Instagram: <a href="https://instagram.com/sweetwafles" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">@sweetwafles</a></li>
        </ul>

        <div className="mt-8">
          <iframe
            title="Mapa umístění Waffle Delight"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.739669173093!2d14.9058251158891!3d50.41580257947048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a2a0c9d9233e1%3A0x2a9439b4cc2ef14f!2sMlad%C3%A1%20Boleslav!5e0!3m2!1scs!2scz!4v1684917768763!5m2!1scs!2scz"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
    </>
  );
}
