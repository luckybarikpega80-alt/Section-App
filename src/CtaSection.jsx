import { ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section className="bg-[#0F172A] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-7xl rounded-lg border border-slate-700 bg-[#111827] px-10 py-24">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
          Boost your productivity.
          <br />
          Start using our app today.
        </h1>

        <div className="flex items-center gap-6 mt-10">
          <button className="bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold px-6 py-3 rounded-lg">
            Get started
          </button>

          <button className="flex items-center gap-2 text-white font-semibold hover:text-indigo-400 transition">
            Learn more
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
