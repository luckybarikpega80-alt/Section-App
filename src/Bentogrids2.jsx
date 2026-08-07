import bento1 from "./bento1.png";
import bento2 from "./bento2.png";
import bento3 from "./bento3.png";
import Luster from "./Luster.png";
import Luster2 from "./Luster2.jpg";

function Bentogrids2() {
  return (
    <section className="bg-[#0F172A] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-indigo-400 font-semibold cursor-pointer hover:">
          Deploy faster
        </p>

        <h1 className="text-white text-5xl font-bold leading-tight mt-2">
          Everything you need
          <br />
          to deploy your app
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {/* FIRST CONTAINER */}
          <div className="col-span-2 bg-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            {/* Image */}
            <div className="h-72">
              <img src={bento1} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Text */}
            <div className="p-6">
              <p className="text-gray-400 font-bold">Release</p>
              <h6 className="text-white text-xl font-bold">Push to deploy </h6>
              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                gravida justo et nulla efficitur, maximus egestas sem
                pellentesque.
              </p>
            </div>
          </div>

          {/* SECOND CONTAINER */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="h-72">
              <img src={bento3} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <h2 className="text-white text-2xl font-bold">Integrations</h2>

              <p className="text-gray-400 mt-3">
                Connect your favourite tools with our platform.
              </p>
            </div>
          </div>

          {/* THIRD CONTAINER */}
          <div className="bg-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            {/* Two circles */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <div className="w-20 h-20 rounded-full bg-slate-600 overflow-hidden">
                <img
                  src={Luster}
                  alt=""
                  className="w-full h-full object-cover mt-0.3"
                />
              </div>

              <div className="w-20 h-20 rounded-full bg-slate-600 overflow-hidden">
                <img
                  src={Luster2}
                  alt=""
                  className="w-full h-full object-cover mt-"
                />
              </div>
            </div>

            {/* Text */}
            <div className="mt-10">
              <h2 className="text-white text-2xl font-bold">Security</h2>

              <p className="text-gray-400 mt-3">
                Your design is protected with Luster Jnr Tech and desig,
                Transparency, Honesty and Integrity
              </p>
            </div>
          </div>

          {/* FOURTH CONTAINER */}
          <div className="col-span-2 bg-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="h-72">
              <img
                src={bento2}
                alt=""
                className="w-full h-full ml-1 object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-gray-400">Performance</p>

              <h6 className="text-white text-xl font-bold">
                Performance Lightning-fast
              </h6>
              <p className="text-gray-400 mt-3">
                builds Sed congue eros non finibus molestie. Vestibulum euismod
                augue vel commodo vulputate. Maecenas at augue sed elit dictum
                vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bentogrids2;
