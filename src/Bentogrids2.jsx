function Bentogrids2() {
  return (
    <section className="bg-[#0F172A] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-indigo-400 font-semibold">Deploy faster</p>

        <h1 className="text-white text-5xl font-bold leading-tight mt-2">
          Everything you need
          <br />
          to deploy your app
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {/* ===================== 1 ===================== */}
          <div className="col-span-2 bg-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            {/* Image */}
            <div className="h-72">
              {/* <img src={image1} alt="" className="w-full h-full object-cover" /> */}
            </div>

            {/* Text */}
            <div className="p-6">
              <h2 className="text-white text-2xl font-bold">Powerful APIs</h2>

              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsum laborum molestias.
              </p>
            </div>
          </div>

          {/* ===================== 2 ===================== */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="h-72">
              {/* <img src={image2} alt="" className="w-full h-full object-cover" /> */}
            </div>

            <div className="p-6">
              <h2 className="text-white text-2xl font-bold">Integrations</h2>

              <p className="text-gray-400 mt-3">
                Connect your favourite tools with our platform.
              </p>
            </div>
          </div>

          {/* ===================== 3 ===================== */}
          <div className="bg-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            {/* Two circles */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <div className="w-20 h-20 rounded-full bg-slate-600 overflow-hidden">
                {/* <img
                  src={image3}
                  alt=""
                  className="w-full h-full object-cover"
                /> */}
              </div>

              <div className="w-20 h-20 rounded-full bg-slate-600 overflow-hidden">
                {/* <img
                  src={image4}
                  alt=""
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>

            {/* Text */}
            <div className="mt-10">
              <h2 className="text-white text-2xl font-bold">Security</h2>

              <p className="text-gray-400 mt-3">
                Your data is protected with enterprise-grade security.
              </p>
            </div>
          </div>

          {/* ===================== 4 ===================== */}
          <div className="col-span-2 bg-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="h-72">
              {/* <img src={image5} alt="" className="w-full h-full object-cover" /> */}
            </div>

            <div className="p-6">
              <h2 className="text-white text-2xl font-bold">Performance</h2>

              <p className="text-gray-400 mt-3">
                Lightning-fast builds and optimized deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bentogrids2;
