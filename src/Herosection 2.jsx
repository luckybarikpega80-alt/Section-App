import React from "react";
import { ArrowRight } from "lucide-react";
import bg from "./BG.png";

const Herosection = () => {
  return (
    <section className="min-h-screen bg-[#070B18] flex items-center justify-center p-6">
      <div className="max-w-7xl w-full rounded-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="bg-[#0F172A] px-12 py-20 flex flex-col justify-center">
          {/* Logo */}
          <div className="ml-4 text-sky-400 text-4xl">
            <SiTailwindcss />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-slate-700 rounded-full px-4 py-2 text-sm text-gray-400 w-fit">
            Anim aute id magna aliqua ad ad non deserunt sunt.
            <span className="text-indigo-400 flex items-center gap-1 cursor-pointer">
              Read more
              <ArrowRight size={14} />
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-5xl lg:text-6xl font-bold mt-10 leading-tight">
            Data to enrich
            <br />
            your business
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 mt-8 max-w-md leading-7">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Get started
            </button>

            <button className="flex items-center gap-2 text-white font-medium">
              Learn more
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img src={bg} alt="Laptop" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
