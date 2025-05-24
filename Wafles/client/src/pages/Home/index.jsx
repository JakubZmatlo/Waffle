import Footer from "@/components/Footer";
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header className="sticky top-0 bg-yellow-100 z-50 mt-4 mb-5" />

      <div className=" md:hidden w-full flex justify-center mb-10 px-6">
        <img
          src="https://static.vecteezy.com/system/resources/previews/035/512/249/original/ai-generated-waffle-clipart-design-illustration-free-png.png"
          alt="Waffle"
          className="w-48 h-auto"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 mt-10 md:mt-40 mb-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl z-10 relative mx-auto md:ml-[-80px]">
          <h1 className="font-bold text-yellow-700 drop-shadow-lg text-[5rem] md:text-[8rem] leading-tight">
            Sweet Wafles
          </h1>

          <p className="text-yellow-800 text-base md:text-lg font-medium mt-5 w-full text-center md:text-left md:pl-2">
            Objev svět chutí a vůní vyber si z našich{" "}
            <br className="hidden md:inline" />
            čerstvých waflí, vytvoř si vlastní unikátní
            <br className="hidden md:inline" />
            kombinaci podle své fantazie
          </p>

          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 mt-8 md:mt-10 w-full">
            <Link to="/create-wafles" className="w-full md:w-auto">
              <div className="bg-yellow-100 hover:bg-yellow-200 py-3 md:py-4 px-6 md:px-8 rounded-full shadow-md transition transform hover:scale-105 cursor-pointer text-center">
                <h2 className="text-lg md:text-xl font-semibold text-yellow-800">
                  ➕ Objednat wafli
                </h2>
              </div>
            </Link>

            <Link to="/menu" className="w-full md:w-auto">
              <div className="bg-yellow-100 hover:bg-yellow-200 py-3 md:py-4 px-6 md:px-8 rounded-full shadow-md transition transform hover:scale-105 cursor-pointer text-center">
                <h2 className="text-lg md:text-xl font-semibold text-yellow-800">
                  📋 Zobrazit menu
                </h2>
              </div>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/025/067/649/non_2x/waffle-with-ai-generated-free-png.png"
              alt="Speciální wafle"
              className="w-48 h-auto"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/512/241/original/ai-generated-waffle-clipart-design-illustration-free-png.png"
              alt="Speciální wafle"
              className="w-48 h-auto"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/512/267/non_2x/ai-generated-waffle-clipart-design-illustration-free-png.png"
              alt="Speciální wafle"
              className="w-48 h-auto"
            />
          </div>
        </div>

        <img
          src="https://static.vecteezy.com/system/resources/previews/035/512/249/original/ai-generated-waffle-clipart-design-illustration-free-png.png"
          alt="Waffle"
          className="hidden md:block absolute right-0 top-0 w-80 lg:w-[500px] h-auto pointer-events-none"
          style={{ top: "70px", transform: "translate(0%, -10%)" }}
        />
      </div>

      <div className="mt-0">
        <Footer />
      </div>
    </>
  );
}
