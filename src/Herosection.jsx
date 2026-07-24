import { Link } from "react-router";
import { SiTailwindcss } from "react-icons/si";
import SignIn from "./SignIn";
import { ArrowRight } from "lucide-react";
// import "SignIn" from "./SignIn"
function Herosection() {
  return (
    <div className="flex bg-[url(assets\BG.png)] justify-center px-6 min-h-screen">
      <div className="flex flex-row items-center justify-between w-full gap-5 absolute p-4 font-bold">
        <div className="ml-4 text-sky-400 text-2xl">
          <SiTailwindcss />
        </div>
        <div className="flex gap-4 p-2 mt-0 text-white">
          <a href="">Product</a>
          <a href="#">Features</a>
          <a href="#">Marketplace</a>
          <a href="#">Company</a>
        </div>
        <div className="text-white mr-7">
          <a href={<SignIn />} className="flex gap-2">
            Log in <ArrowRight w={1} />{" "}
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen w-[45%] text-center gap-4">
        <p className="flex text-gray-400 font-bold border border-gray-400 gap-4 py-1 px-3 rounded-4xl mb-4">
          Announcing our next round of funding.
          <a href={<SignIn />} className="flex text-purple-500">
            Read more <ArrowRight />
          </a>
        </p>

        <h1 className="text-white text-5xl font-bold">
          Data to enrich your online business
        </h1>
        <p className="mt-3 text-gray-400 font-bold">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="flex flex-row items-center justify-center gap-5 mt-4">
          <button className="bg-indigo-500 rounded p-2 w-30 text-white font-bold cursor-pointer hover:">
            Get started
          </button>
          <a href={<SignIn />} className="flex text-white font-bold">
            Learn more <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Herosection;
