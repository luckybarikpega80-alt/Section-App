import { Link } from "react-router";
import { SiTailwindcss } from "react-icons/si";

export function SignIn() {
  return (
    <div
      style={{ backgroundColor: "#101828" }}
      className="flex items-center justify-center px-6 min-h-screen"
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mt-10">
          <SiTailwindcss className="text-sky-400 text-5xl" />
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
          Sign in to your account{" "}
        </h2>

        {/* Form */}
        <form className="mt-10 space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              className="mt-2 block w-full rounded-md border border-white-700 bg-gray-800 px-3 py-2 text-white outline-none focus:border-indigo-500 placeholder:required:"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white placeholder:required:"
              >
                Password
              </label>

              <a
                href="#"
                className="text-sm font-semibold text-indigo-400 hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </div>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="mt-2 block w-full rounded-md border border-white-700 bg-gray-800 px-3 py-2 text-white outline-none focus:border-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-500"
          >
            Sign in
          </button>
        </form>

        {/* Bottom Link */}
        <p className="mt-10 text-center text-sm text-white">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}

export default function SignIn1() {
  return (
    <div className="bg-gray-900 w-full h-full flex flex-col items-center justify-center ">
      <SignIn />
    </div>
  );
}
