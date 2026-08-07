function Pricing() {
  return (
    <section className="min-h-screen bg-[#0F172A] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-white">
            Simple no-tricks pricing
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-800 rounded-3xl p-8 flex gap-8">
          {/* LEFT SIDE */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white">
              Lifetime membership
            </h2>

            <p className="text-gray-400 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus iure quidem
              assumenda.
            </p>

            <h3 className="text-blue-400 font-semibold cursor-pointer  mt-10">
              What's Included
            </h3>

            <hr className="border border-slate my-5 font-extrabold text-white" />

            <div className="grid grid-cols-2 gap-y-5 text-white">
              <div>✓ Private forum access</div>
              <div>✓ Member resources</div>
              <div>✓ Entry to annual conference</div>
              <div>✓ Official member t-shirt</div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[320px] bg-slate-900 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <p className="text-gray-400">Pay once, own it forever</p>

            <h2 className="text-6xl font-bold text-white mt-4">$349</h2>

            <p className="text-gray-400 text-sm mt-1">USD</p>

            <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 cursor-pointer py-3 rounded-xl text-white font-semibold">
              Get access
            </button>

            <p className="text-xs text-gray-500 mt-5 leading-6 font-bold">
              Invoices and receipts available for easy company reimbursement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
