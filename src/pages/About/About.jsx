import { LiaFacebookF } from "react-icons/lia";
import { TfiTwitter, TfiInstagram } from "react-icons/tfi";

const About = () => {
    return (
        <div className="px-16 h-full">
            {/* img div */}
        <div className="flex gap-6  pt-28 border-b pb-6">
        <div className="">
                <div className="border   rounded-full  shadow w-[245px] h-[245px]">
                    <img className="rounded-full p-4 " src="https://i.ibb.co/0hq6nY4/shorif-banner.png" alt="" />
                </div>
                <div className="flex gap-4 justify-center pt-6">
                    <div className="bg-blue-950 text-white p-3 rounded-full">
                        <LiaFacebookF />
                    </div>
                    <div className="bg-sky-500 text-white p-3 rounded-full">
                        <TfiTwitter />
                    </div>
                    <div className="bg-red-500 text-white p-3  rounded-full">
                        <TfiInstagram />
                    </div>
                </div>

            </div>
            {/* description */}
            <div>
                <div>
                    <h3>- I Am Shorif Ahamed</h3>
                    <h2 className="text-7xl py-8">FREELANCER</h2>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="rounded-lg shadow-md  bg-[#D7B0FF] p-3">
                        <h2 className="">
                            Name:
                        </h2>
                        <h2 className="font-medium">
                            Shorif Ahamed
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-md bg-[#D7B0FF] p-3">
                        <h2 className="">
                            Date of birth:
                        </h2>
                        <h2 className="font-medium">
                            April 12, 1996
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-md bg-[#D7B0FF] p-3">
                        <h2 className="">
                            Email:
                        </h2>
                        <h2 className="font-medium">
                            xshorifahamed@gmail.com
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-md bg-[#D7B0FF] p-3">
                        <h2 className="">
                            Phone:
                        </h2>
                        <h2 className="font-medium">
                            +88017 9704 1241
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-md bg-[#D7B0FF] p-3">
                        <h2 className="">
                            Address:
                        </h2>
                        <h2 className="font-medium">
                            Rajshahi, BD
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-md bg-[#D7B0FF] p-3">
                        <h2 className="">
                            Nationality:
                        </h2>
                        <h2 className="font-medium">
                            Bangladesh
                        </h2>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="pt-10 h-full">
            <p>
            Thank you for visit my Profile. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web model text.
            </p>

            <button className="bg-orange-500 rounded mt-16 text-white px-8 py-3">Download CV</button>

        </div>
        </div>
    );
};

export default About;