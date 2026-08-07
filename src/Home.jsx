import { Link } from "react-router";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#0E1628] flex flex-col items-center py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-8xl font-black text-purple-700 leading-none">
          LUSTER JNR
        </h1>

        <h2 className="text-6xl font-black text-purple-700 leading-none mt-2">
          TECH AND DESIGN
        </h2>

        <h3 className="text-4xl font-extrabold tracking-[10px] text-purple-600 mt-3">
          SECTION PAGE
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-6 gap-5">
        <Link
          to="/signin"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          SIGN IN 1
        </Link>

        <Link
          to="/signin2"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          SIGN IN 2
        </Link>

        <Link
          to="/hero"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          HERO 1
        </Link>

        <Link
          to="/hero2"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          HERO 2
        </Link>

        <Link
          to="/cta"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          CTA 1
        </Link>

        <Link
          to="/cta2"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          CTA 2
        </Link>

        <Link
          to="/bentogrids"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          BENTO
        </Link>

        <Link
          to="/app"
          className="w-52 h-40 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          APP
        </Link>

        {/* Empty Boxes */}
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
        <div className="w-52 h-40 bg-amber-400 rounded-3xl"></div>
      </div>

      {/* Footer */}
      <p className="text-white italic text-4xl mt-16">
        copy right. Alright right reserve luster jnr tech and design 2026
      </p>
    </section>
  );
};

export default Home;
