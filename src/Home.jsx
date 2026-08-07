import { Link } from "react-router";

function Home() {
  return (
    <section className="min-h-screen bg-[#0E1628] flex flex-col items-center py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-7xl font-black text-purple-700 leading-none">
          BARIKPEGA NKABARI
        </h1>

        <h2 className="text-5xl font-black text-white leading-none mt-2">
          ASSIGNMENT ON SECTION APP
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-6 gap-5">
        <Link
          to="/signin"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          SIGN IN 1
        </Link>

        <Link
          to="/signin2"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          SIGN IN 2
        </Link>

        <Link
          to="/hero"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          HERO 1
        </Link>

        <Link
          to="/hero2"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          HERO 2
        </Link>

        <Link
          to="/cta"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          CTA 1
        </Link>

        <Link
          to="/cta2"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          CTA 2
        </Link>

        <Link
          to="/bentogrids"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          BENTO 1
        </Link>
        <Link
          to="/bentogrids2"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          BENTO 2
        </Link>
        <Link
          to="/price1"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          PRICE 1
        </Link>
        <Link
          to="/price2"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          PRICE 2
        </Link>
        <Link
          to="/news1"
          className="w-52 h-40 bg-amber-500 rounded-3xl flex items-center justify-center text-3xl font-bold text-[#0E1628] hover:scale-105 transition"
        >
          NEWS 1
        </Link>
      </div>

      {/* Footer */}
      <p className="text-white italic text-2xl mt-16">
        copy right. Alright right reserve luster jnr tech and design 2026
      </p>
    </section>
  );
}

export default Home;
