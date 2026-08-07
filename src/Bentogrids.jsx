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
          <p className="text-indigo-400 font-semibold">Deploy faster</p>

          <h1 className="text-5xl font-bold text-white mt-2">
            Everything you need
            <br />
            to deploy your app
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* LEFT CARD */}
          <div className="row-span-2 rounded-2xl bg-slate-800 overflow-hidden">
            <div className="p-6">
              <h2 className="text-white text-xl font-bold">Mobile friendly</h2>

              <p className="text-gray-400 mt-3">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
            </div>

            <img src={image1} className="w-full h-80 object-cover" alt="" />
          </div>

          {/* TOP MIDDLE */}
          <div className="rounded-2xl bg-slate-800 p-6">
            <h2 className="text-white text-xl font-bold">Performance</h2>

            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <img src={image4} className="mt-6 w-full" alt="" />
          </div>

          {/* RIGHT CARD */}
          <div className="row-span-2 rounded-2xl bg-slate-800 overflow-hidden">
            <div className="p-6">
              <h2 className="text-white text-xl font-bold">Powerful APIs</h2>

              <p className="text-gray-400 mt-3">
                Sit quis amet rutrum tellus ullamcorper ultrices libero dolor
                eget.
              </p>
            </div>

            <img src={image2} className="w-full h-80 object-cover" alt="" />
          </div>

          {/* BOTTOM MIDDLE */}
          <div className="rounded-2xl bg-slate-800 p-6">
            <h2 className="text-white text-xl font-bold">Security</h2>

            <p className="text-gray-400 mt-3">Morbi viverra dui mi arcu sed.</p>

            <img src={image3} className="mt-6 w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bentogrids;
