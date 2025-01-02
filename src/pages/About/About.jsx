import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TfiInstagram } from "react-icons/tfi";
// import Marquee from "react-fast-marquee";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const About = () => {
  return (
    <div className=" px-6 md:px-16 h-full">
      {/* img div */}
      <div className="flex flex-col md:flex-row gap-6 pt-6 md:pt-16 pb-28">
        <div className="flex flex-col justify-center items-center">
          <div className="border hover:bg-orange-500  rounded-full  shadow w-[245px] h-[245px]">
            <img
              className="rounded-full p-4 "
              src="https://i.ibb.co/0hq6nY4/shorif-banner.png"
              alt=""
            />
          </div>
          <div className="flex gap-4 justify-center pt-6">
            <a
              href="https://github.com/shorif2"
              target="_blank"
              className="bg-neutral-700 text-white p-2 text-2xl rounded-full"
            >
              <TbBrandGithubFilled />
            </a>
            <a
              href="https://www.linkedin.com/in/sorifuzzaman/"
              target="_blank"
              className="bg-sky-500 text-white p-3 rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.linkedin.com/in/sorifuzzaman/"
              target="_blank"
              className="bg-red-500 text-white p-3  rounded-full"
            >
              <TfiInstagram />
            </a>
          </div>
        </div>
        {/* description */}
        <div>
          <div>
            <h3 className="text-lg font-medium">- I'm Shorif Ahamed</h3>
            <h2 className="text-4xl md:text-4xl lg:text-7xl py-8">
              WEB DEVELOPER
            </h2>
            <p className="">
              Ambitious Front-End Web Developer with a keen eye for design and a
              commitment to delivering user-centric websites. Excited to join a
              collaborative team where I can apply my technical skills and
              contribute to projects.
            </p>
            <div className="pt-10">
              <a
                href="/Resume-shorif.pdf"
                download
                className="bg-orange-500 rounded text-white px-8 py-3 font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="rounded-lg shadow-sm hover:shadow-orange-500  border p-3">
          <h2 className="">Name:</h2>
          <h2 className="font-medium">Shorif Ahamed</h2>
        </div>
        <div className="rounded-lg  border p-3">
          <h2 className="">Date of birth:</h2>
          <h2 className="font-medium">April 12, 1996</h2>
        </div>
        <div className="rounded-lg  border p-3">
          <h2 className="">Email:</h2>
          <h2 className="font-medium">xshorifahamed@gmail.com</h2>
        </div>
        <div className="rounded-lg  border p-3">
          <h2 className="">Phone:</h2>
          <h2 className="font-medium">+88017 9704 1241</h2>
        </div>
        <div className="rounded-lg  border p-3">
          <h2 className="">Address:</h2>
          <h2 className="font-medium">Rajshahi, BD</h2>
        </div>
        <div className="rounded-lg  border p-3">
          <h2 className="">Nationality:</h2>
          <h2 className="font-medium">Bangladesh</h2>
        </div>
      </div>
      <div className="pt-10">
        <p className="">
          Thank you for visit my Profile. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          Content here content here making it look like readable English. Many
          desktop publishing packages and web model text.
        </p>
      </div>
      {/* <div>
                <Carousel responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    customTransition="all .5"
                    transitionDuration={500}
                >
                    <div className="rounded-lg shadow-sm hover:shadow-orange-500  border p-3">
                        <h2 className="">
                            Name:
                        </h2>
                        <h2 className="font-medium">
                            Shorif Ahamed
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-sm hover:shadow-orange-500  border p-3">
                        <h2 className="">
                            email:
                        </h2>
                        <h2 className="font-medium">
                            Shorif Ahamed
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-sm hover:shadow-orange-500  border p-3">
                        <h2 className="">
                            Name:
                        </h2>
                        <h2 className="font-medium">
                            Shorif Ahamed
                        </h2>
                    </div>
                    <div className="rounded-lg shadow-sm hover:shadow-orange-500  border p-3">
                        <h2 className="">
                            Name:
                        </h2>
                        <h2 className="font-medium">
                            Shorif Ahamed
                        </h2>
                    </div>
                </Carousel>;
            </div> */}
      {/* <Marquee>
            <div className="rounded-lg shadow-sm hover:shadow-orange-500  border p-3">
                    <h2 className="">
                        Name:
                    </h2>
                    <h2 className="font-medium">
                        Shorif Ahamed
                    </h2>
                </div>
                <div className="rounded-lg  border p-3">
                    <h2 className="">
                        Date of birth:
                    </h2>
                    <h2 className="font-medium">
                        April 12, 1996
                    </h2>
                </div>
                <div className="rounded-lg  border p-3">
                    <h2 className="">
                        Email:
                    </h2>
                    <h2 className="font-medium">
                        xshorifahamed@gmail.com
                    </h2>
                </div>
                <div className="rounded-lg  border p-3">
                    <h2 className="">
                        Phone:
                    </h2>
                    <h2 className="font-medium">
                        +88017 9704 1241
                    </h2>
                </div>
                <div className="rounded-lg  border p-3">
                    <h2 className="">
                        Address:
                    </h2>
                    <h2 className="font-medium">
                        Rajshahi, BD
                    </h2>
                </div>
                <div className="rounded-lg  border p-3">
                    <h2 className="">
                        Nationality:
                    </h2>
                    <h2 className="font-medium">
                        Bangladesh
                    </h2>
                </div>
            </Marquee> */}
    </div>
  );
};

export default About;
