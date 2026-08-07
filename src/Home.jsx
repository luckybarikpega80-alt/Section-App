import { Link } from "react-router";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#0F172A] flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold text-white mb-10">MY WEBSITE PAGE</h1>

      <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-8">
        <Link
          to="/signin"
          className="bg-transparent border border-white text-white h-13 w-70 rounded-3xl   flex items-center justify-center text-4xl font-bold"
        >
          SIGN IN 1
        </Link>

        <Link
          to="/signin2"
          className="bg-transparent border border-white text-white h-13 w-70 rounded-3xl  flex items-center justify-center text-4xl font-bold"
        >
          SIGN IN 2
        </Link>

        <Link
          to="/hero"
          className="bg-transparent border border-white text-white h-13 w-70 rounded-3xl flex items-center justify-center text-4xl font-bold"
        >
          HERO 1
        </Link>

        <Link
          to="/hero2"
          className="bg-transparent border border-white text-white h-13 w-70 rounded-3xl  flex items-center justify-center text-4xl font-bold"
        >
          HERO 2
        </Link>

        <Link
          to="/cta"
          className="bg-transparent border border-white text-white h-13 w-70 rounded-3xl  flex items-center justify-center text-4xl font-bold"
        >
          CTA SECTION 1
        </Link>

        <Link
          to="/cta2"
          className="bg-transparent border border-white text-white h-13 w-76 rounded-3xl  flex items-center justify-center text-4xl font-bold"
        >
          CTA SECTION 2
        </Link>

        <Link
          to="/bentogrids"
          className="bg-transparent border border-white text-white h-13 w-76 rounded-3xl flex items-center justify-center text-4xl font-bold"
        >
          BENTO GRID
        </Link>
      </div>
    </section>
  );
};

export default Home;
