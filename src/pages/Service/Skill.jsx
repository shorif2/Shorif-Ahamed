import { FaFigma, FaNode, FaDatabase   } from "react-icons/fa";
import { FaHtml5, FaCss3Alt  } from "react-icons/fa6";
import { SiTailwindcss, SiExpress  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { LiaGithub } from "react-icons/lia";

const Skill = () => {
    return (
        <div className="p-10">
            <h2 class="mb-4 text-4xl font-semibold text-center">Skills</h2>
            <hr className="w-12 mx-auto border border-red-300" /> 
            <p class="mb-5 text-center md:w-96 mx-auto pt-4 pb-8">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <div>
                <div className="grid grid-cols-2  md:grid-cols-4 gap-6 justify-center items-center">
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <FaFigma />
                <p></p>
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <FaCss3Alt />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <FaHtml5 />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <SiTailwindcss />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <IoLogoJavascript />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <SiExpress />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <FaNode />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <BiLogoTypescript />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <LiaGithub />
                </div>
                <div className="border text-7xl flex justify-center items-center p-6 hover:shadow-xl">
                <FaDatabase />
                </div>

                </div>
                
            </div>
        </div>
    );
};

export default Skill;