import SignIn from "./SignIn";
import { Routes, Route } from "react-router";
import { Link } from "react-router";
import Home from "./Home";
import { SiTailwindcss } from "react-icons/si";

function App() {
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <SiTailwindcss className="text-indigo-500 text-5xl" />
          </div>

          {/* Heading */}
          <section
            className="flex-1"
            title="Create account"
            link={"/SignIn"}
          ></section>
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Sign in to your account
          </h1>

          {/* Inputs */}
          <div className="overflow-hidden rounded-lg border border-slate-700 bg-[#1E293B]">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-slate-700 bg-transparent px-4 py-4 text-white placeholder:text-slate-400 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent px-4 py-4 text-white placeholder:text-slate-400 outline-none"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="mt-6 flex items-center justify-between">
            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-slate-600 bg-transparent accent-indigo-500"
              />
              Remember me
            </label>

            <a
              href="#"
              className="font-semibold text-indigo-500 hover:text-indigo-400"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button className="mt-8 w-full rounded-lg bg-linear-to-r from-indigo-600 to-indigo-500 py-3 text-lg font-semibold text-white transition hover:opacity-90">
            Sign in
          </button>

          {/* Footer */}
          <p className="mt-12 text-center text-slate-400">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-500 hover:text-indigo-400"
            >
              Start a 14-day free trial
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const Section = ({ title, link }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>Not a member</p>
      <link to={link} className="text-indigo-500">
        Start a 14 day free trial
      </link>
    </div>
  );
};
export default App;
