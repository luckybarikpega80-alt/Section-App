import { Cloud, Shield, Database, Check } from "lucide-react";
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
          <p className="text-indigo-400 text-sm font-semibold cursor-pointer hover:">
            Deploy faster
          </p>

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
              <div className="border border-slate-700  h-151 mt-4 rounded-lg overflow-hidden"></div>
            </div>

            {/* <img src={image1} alt="" className="w-full object-cover mt-4" /> */}
          </div>

          {/* PERFORMANCE */}
          <div className="bg-[#1E293B] h-90 rounded-2xl border border-slate-700 p-6">
            <h2 className="text-white text-xl font-bold">Performance</h2>

            <p className="text-gray-400 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* <img src={image4} alt="" className="w-full mt-6" /> */}
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
            <div className="bg-[#111827] rounded-xl overflow-hidden border border-slate-700">
              {/* Tabs */}
              <div className="flex border-b border-slate-700">
                <div className="bg-slate-700 px-5 py-3 text-white text-sm font-medium border-r border-slate-600">
                  NotificationSetting.jsx
                </div>

                <div className="bg-[#111827] px-5 py-3 text-slate-400 text-sm font-medium">
                  App.jsx
                </div>
              </div>

              {/* Fake Code */}
              <pre className="p-6 text-sm leading-7 overflow-hidden">
                <span className="text-blue-400">import</span>{" "}
                <span className="text-white">{"{ useState }"}</span>{" "}
                <span className="text-blue-400">from</span>{" "}
                <span className="text-green-400">"react"</span>
                {"\n"}
                <span className="text-blue-400">import</span>{" "}
                <span className="text-white">{"{ Switch }"}</span>{" "}
                <span className="text-blue-400">from</span>{" "}
                <span className="text-green-400">"@headlessui/react"</span>
                {"\n\n"}
                <span className="text-blue-400">function</span>{" "}
                <span className="text-indigo-400">Example</span>() {"{"}
                {"\n"}
                {"  "}
                <span className="text-blue-400">const</span>{" "}
                <span className="text-white">[enabled, setEnabled]</span> =
                <span className="text-indigo-400"> useState</span>
                <span className="text-white">(true)</span>
                {"\n\n"}
                {"  "}
                <span className="text-blue-400">return</span> ({"\n"}
                {"    "}
                <span className="text-gray-300">{"<form action="}</span>
                <span className="text-green-400">"/notification-settings"</span>
                <span className="text-gray-300">{" method="}</span>
                <span className="text-green-400">"post"</span>
                <span className="text-gray-300">{">"}</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">{"<Switch"}</span>
                {"\n"}
                {"        "}
                <span className="text-yellow-300">checked</span>=
                <span className="text-white">{"{enabled}"}</span>
                {"\n"}
                {"        "}
                <span className="text-yellow-300">onChange</span>=
                <span className="text-white">{"{setEnabled}"}</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">{">"}</span>
                {"\n"}
                {"        "}
                <span className="text-gray-500">{"{/* ... */}"}</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">{"</Switch>"}</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">{"<button>"}</span>
                Submit
                <span className="text-sky-400">{"</button>"}</span>
                {"\n"}
                {"    "}
                <span className="text-gray-300">{"</form>"}</span>
                {"\n"}
                {"  "}){"\n"}
                {"}"}
              </pre>
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-[#1E293B] h-90 rounded-2xl border border-slate-700 p-6">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text */}
              <h2 className="text-white text-2xl font-bold">Security</h2>

              <p className="text-gray-400 mt-3 leading-7 max-w-sm">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi.
              </p>

              {/* Icons */}
              <div className="flex items-center justify-between gap-6 mt-6 w-full max-w-xs">
                {/* Cloud */}
                <div className="w-16 h-16 rounded-full bg-slate-600 flex items-center justify-center">
                  <Cloud className="text-white w-7 h-7" />
                </div>

                {/* Shield */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-slate-500 flex items-center justify-center m-0">
                    <Shield className="text-white w-10 h-10" />
                  </div>

                  {/* Check badge */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                    <Check className="text-white w-4 h-4" />
                  </div>
                </div>

                {/* Database */}
                <div className="w-16 h-16 rounded-full bg-slate-600 flex items-center justify-center">
                  <Database className="text-white w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bentogrids;
