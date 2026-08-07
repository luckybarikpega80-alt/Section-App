import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

function Bentogrids() {
  return (
    <section className="min-h-screen bg-[#0B1120] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold">Deploy faster</p>

          <h1 className="text-white text-5xl font-bold mt-2 leading-tight">
            Everything you need
            <br />
            to deploy your app
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* LEFT CARD */}
          <div className="bg-[#1E293B] rounded-2xl overflow-hidden row-span-2 border border-slate-700">
            <div className="p-6">
              <h2 className="text-white text-xl font-bold">Mobile friendly</h2>

              <p className="text-gray-400 mt-3">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
            </div>

            <img src={image1} alt="" className="w-full object-cover mt-4" />
          </div>

          {/* PERFORMANCE */}
          <div className="bg-[#1E293B] rounded-2xl border border-slate-700 p-6">
            <h2 className="text-white text-xl font-bold">Performance</h2>

            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <img src={image4} alt="" className="w-full mt-6" />
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1E293B] rounded-2xl overflow-hidden row-span-2 border border-slate-700">
            <div className="p-6">
              <h2 className="text-white text-xl font-bold">Powerful APIs</h2>

              <p className="text-gray-400 mt-3">
                Sit quis amet rutrum tellus ullamcorper ultrices libero dolor
                eget.
              </p>
            </div>

            <img src={image2} alt="" className="w-full object-cover mt-4" />
          </div>

          {/* SECURITY */}
          <div className="bg-[#1E293B] rounded-2xl border border-slate-700 p-6">
            <h2 className="text-white text-xl font-bold">Security</h2>

            <p className="text-gray-400 mt-3">
              Morbi viverra dui mi arcu sed. Tellus semper adipiscing
              suspendisse semper morbi.
            </p>

            <img src={image3} alt="" className="w-full mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bentogrids;
