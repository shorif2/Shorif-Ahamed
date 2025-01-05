import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaFigma, FaNode } from "react-icons/fa";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { LiaGithub } from "react-icons/lia";
import { SiExpress, SiTailwindcss } from "react-icons/si";

const Skill = () => {
  return (
    <div className="p-12">
      <h2 class="mb-4 text-4xl font-semibold text-center">Skills</h2>
      <hr className="w-12 mx-auto border border-red-300" />
      <p class="mb-5 text-center md:w-96 mx-auto pt-4 pb-8">
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </p>
      <div>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6 justify-center items-center">
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <FaFigma />
            <p></p>
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <FaCss3Alt />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <FaHtml5 />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <SiTailwindcss />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <IoLogoJavascript />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <SiExpress />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <FaNode />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <BiLogoTypescript />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <LiaGithub />
          </div>
          <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl hover:bg-orange-500 ">
            <FaDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
