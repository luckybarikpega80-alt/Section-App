import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

function Bentogrids() {
  return (
    <section className="bg-[#0B1120] min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {/* 1 - Heading & Paragraph */}
        <div className="bg-slate-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white">Simple heading</h2>

          <p className="text-gray-400 mt-4">
            This is where your paragraph will go.
          </p>
        </div>

        {/* 2 - Image */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden">
          <img src={image1} alt="" className="w-full h-full object-cover" />
        </div>

        {/* 3 - Heading & Paragraph */}
        <div className="bg-slate-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white">Another heading</h2>

          <p className="text-gray-400 mt-4">Write your description here.</p>
        </div>

        {/* 4 - Image */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden">
          <img src={image2} alt="" className="w-full h-full object-cover" />
        </div>

        {/* 5 - Image */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden">
          <img src={image3} alt="" className="w-full h-full object-cover" />
        </div>

        {/* 6 - Heading & Paragraph */}
        <div className="bg-slate-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white">Third heading</h2>

          <p className="text-gray-400 mt-4">Another paragraph goes here.</p>
        </div>

        {/* 7 - Image */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden col-span-3">
          <img src={image4} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Bentogrids;
