function Newsletter() {
  return (
    <section className="bg-[#0F172A] w-full py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold text-white">
            Subscribe to our newsletter
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </p>

          {/* Email */}
          <div className="flex gap-4 mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-14 px-5  w-120 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
            />

            <button className="px-8 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle */}
        <div>
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-2xl">
            📅
          </div>

          <h3 className="text-2xl font-bold text-white mt-6">
            Weekly articles
          </h3>

          <p className="text-gray-400 mt-4 leading-8">
            Non laboris consequat cupidatat laborum magna. Eiusmod non irure
            cupidatat duis commodo amet.
          </p>
        </div>

        {/* Right */}
        <div>
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-2xl">
            ✋
          </div>

          <h3 className="text-2xl font-bold text-white mt-6">No spam</h3>

          <p className="text-gray-400 mt-4 leading-8">
            Officia excepteur ullamco ut sint duis proident non adipisicing.
            Voluptate incididunt anim.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
