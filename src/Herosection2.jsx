import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import pics from "./Pics.png";

function Herosection() {
  return (
    <section className="bg-[#070B18] min-h-screen flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-7xl rounded-xl overflow-hidden flex">
        {/* Left Side */}
        <div className="w-1/2 bg-[#0F172A] px-16 py-20 flex flex-col justify-center">
          {/* Everything on the left goes here */}
          <div className="flex mt-10 mb-12">
            <SiTailwindcss className="text-sky-400 text-5xl" />
          </div>

          <div className="inline-flex items-center rounded-full border border-slate-700 bg-[#111827] px-2 py-2 text-sm">
            <span className="text-slate-400">
              Anim aute id magna aliqua ad ad non deserunt sunt.
            </span>

            <a
              href="#"
              className="ml-2 flex items-center gap-1 font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Read more
              <ArrowRight size={14} />
            </a>
          </div>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Data to enrich
            <br />
            your business
          </h1>

          <p className="text-gray-400 mt-6 max-w-md">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:">
              Get started
            </button>

            <button className="text-white cursor-pointer hover:">
              Learn more →
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <img src={pics} alt="Laptop" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
