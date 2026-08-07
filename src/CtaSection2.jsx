import { ArrowRight } from "lucide-react";

function CtaSection2() {
  return (
    <section className="min-h-screen bg-[#0B1220] flex items-center justify-center px-6">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-700 bg-[#1E293B] py-24">
        {/* Purple Glow */}
        <div className="absolute -bottom-52 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[120px]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-white md:text-6xl">
            Boost your productivity today
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white cursor-pointer hover: transition hover:bg-indigo-500">
              Get started
            </button>

            <button className="flex items-center gap-2 font-semibold text-white transition hover:text-indigo-400 cursor-pointer hover:">
              Learn more
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection2;
