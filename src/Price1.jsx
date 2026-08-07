function Pricing() {
  return (
    <section className="bg-slate-950 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="text-purple-500 font-semibold cursor-pointer">
            Pricing
          </p>

          <h1 className="text-5xl font-bold text-white mt-3">
            Choose the right plan for you
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
        {/* MAIN CONTAINER */}
        <div className="flex gap-8 justify-center mt-16">
          {/* Left Card */}
          <div className="bg-slate-800 rounded-2xl p-8 w-full max-w-md">
            <p className="text-purple-500 font-semibold cursor-pointer">
              Hobby
            </p>

            <div className="flex items-end gap-2 mt-4">
              <h2 className="text-5xl font-bold text-white">$29</h2>

              <span className="text-gray-400 mb-2">/month</span>
            </div>

            <p className="text-gray-400 mt-6">
              Modi dolorem expedita deleniti. Corporis iste qui inventore
              pariatur adipisci vitae.
            </p>

            {/* List */}
            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✓ 5 products</li>

              <li>✓ Up to 1,000 subscribers</li>
              <li>✓ Basic analytics</li>
              <li>✓ 48-hour support response time</li>
            </ul>

            <button className="w-full mt-20 bg-indigo-600 cursor-pointer hover:bg-indigo-500 text-white py-3 rounded-lg">
              Get started today
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-slate-800 rounded-2xl p-8 w-full max-w-md">
            <p className="text-purple-500 font-semibold cursor-pointer">Team</p>

            <div className="flex items-end gap-2 mt-4">
              <h2 className="text-5xl font-bold text-white">$99</h2>

              <span className="text-gray-400 mb-2">/month</span>
            </div>

            <p className="text-gray-400 mt-6">
              Explicabo quo fugit vel facere ullam corrupti non dolores.
              Expedita eius sit sequi.
            </p>

            {/* List */}
            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✓ Unlimited products</li>
              <li>✓ Unlimited subscribers</li>
              <li>✓ Advanced analytics</li>
              <li>✓ 1-hour support response time</li>
              <li>✓ Marketing automations</li>
            </ul>

            <button className="w-full mt-10 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white py-3 rounded-lg">
              Get started today
            </button>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="bg-slate-900 rounded-2xl mt-10 p-8 flex justify-between items-center">
          {/* Left Side */}
          <div>
            <h3 className="text-purple-500 font-semibold cursor-pointer">
              Discounted
            </h3>

            <p className="text-gray-400 mt-3">
              Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit
              omnis non voluptatem sunt eos nostrum.
            </p>
          </div>

          {/* Right Side */}
          <div>
            <button className="bg-slate-700 cursor-pointer hover:bg-slate-600 text-white px-6 py-3 rounded-lg">
              Buy discounted license →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
