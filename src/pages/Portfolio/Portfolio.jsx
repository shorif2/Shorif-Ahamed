import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <div className="max-w-[85rem] h-screen  px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <div className="max-w-2xl mx-auto text-white text-center mb-10 lg:mb-14">
          <h2 class="mb-4 text-4xl font-semibold text-center">Project</h2>
          <hr className="w-12 mx-auto border border-red-300" />
          <p className="mt-2 text-white">
            Here's some noticeable web project what I developed.
          </p>
        </div>
        <div className="space-y-6 pb-10">
          {/* Gift haven */}
          <div className="bg-black/20  backdrop-blur-sm flex flex-col md:flex-row w-full md:h-72 border-[.5px] border-gray-400 rounded">
            <div className="w-full md:w-3/5 p-6 space-y-3">
              <h3 className="text-xl font-semibold  group-hover:text-gray-600 dark:text-gray-200">
                Gift Haven
              </h3>
              <p className=" mt-3 ">
                This is a small e-commerce application developed using the MERN
                (MongoDB, Express.js, React.js, Node.js) stack. The project
                implements Firebase Authentication, JWT-based authorization, and
                user role management while maintaining a responsive and
                user-friendly interface.
              </p>
              <p className="">
                Html 5, Css 3, Tailwind.css, Javascript, Firebase, React.js,
                Node.js, Express.js, Mongodb
              </p>
              <div className="flex gap-4 justify-between items-center">
                <Link
                  to="https://github.com/shorif2/service-sharing-zone-client"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Github
                </Link>
                <Link
                  to="https://service-sharing-client.web.app/"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Live Site
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/5 ">
              <img
                className="w-full h-full border   object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded"
                src="/giftHaven.png"
                alt="Image Description"
              />
            </div>
          </div>
          {/* ServiSwap */}
          <div className="bg-black/20 backdrop-blur-sm flex flex-col md:flex-row  w-full md:h-72 border-[.5px] border-gray-400 rounded">
            <div className="w-full md:w-3/5 p-6 space-y-3">
              <h3 className="text-xl font-semibold  group-hover:text-gray-600 dark:text-gray-200">
                ServiSwap
              </h3>
              <p className="mt-3 ">
                This is a service sharing website where anyone can take service
                and share their own service, clean web browsing view and secure
                user date.
              </p>
              <p>
                Html 5, Css 3, Tailwind.css, Javascript, Firebase, React.js,
                Node.js, Express.js, Mongodb
              </p>
              <div className="flex gap-4 justify-between items-center">
                <Link
                  to="https://github.com/shorif2/service-sharing-zone-client"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Github
                </Link>
                <Link
                  to="https://service-sharing-client.web.app/"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Live Site
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <img
                className="h-full border   object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded"
                src="https://i.ibb.co/hDJxv2g/Service-Provider.png"
                alt="Image Description"
              />
            </div>
          </div>
          {/* blood donation */}
          <div className="bg-black/20 backdrop-blur-sm flex flex-col md:flex-row w-full md:h-72 border-[.5px] border-gray-400 rounded">
            <div className="w-full md:w-3/5 p-6 space-y-3">
              <h3 className="text-xl font-semibold  group-hover:text-gray-600 dark:text-gray-200">
                One Blood
              </h3>
              <p className="mt-3 ">
                This is blood management website where anyone can create request
                for blood and find blood donar. user can donate fund for the
                organization. there are three authorization admin, volunteer and
                donar.
              </p>
              <p>
                Html 5, Css 3, Tailwind.css, Javascript, Firebase, React.js,
                Node.js, Express.js, Mongodb
              </p>
              <div className="flex gap-4 justify-between items-center">
                <Link
                  to="https://github.com/shorif2/blood-donation-application-client"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Github
                </Link>
                <Link
                  to="https://blood-donation-a0f11.web.app//"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Live Site
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <img
                className="h-full border   object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded"
                src="https://i.ibb.co/1bcGw1z/Blood-Donation.png"
                alt="Image Description"
              />
            </div>
          </div>
          {/* wedding planner*/}
          <div className="bg-black/20 backdrop-blur-sm flex flex-col md:flex-row   w-full md:h-72 border-[.5px] border-gray-400 rounded">
            <div className="w-full md:w-3/5 p-6 space-y-3">
              <h3 className="text-xl font-semibold  group-hover:text-gray-600 dark:text-gray-200">
                Wedding Planner
              </h3>
              <p className="mt-3 ">
                This is wedding event management website. All wedding service
                available in this site. Customer can buy wedding accessories
                from here. This website in mobile responsive and clean web-view.
              </p>
              <p>
                Html 5, Css 3, Tailwind.css, Javascript, Firebase, React.js,
                Node.js, Express.js, Mongodb
              </p>
              <div className="flex gap-4 justify-between items-center">
                <Link
                  to="https://github.com/shorif2/wedding-planner"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Github
                </Link>
                <Link
                  to="https://sweet-zabaione-870eb9.netlify.app/"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
                >
                  Live Site
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <img
                className="h-full border   object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded"
                src="https://i.ibb.co/zm7DVzb/Wedding-planner.png"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
        {/* ServiSwap */}

        {/* extra */}
        {/* <div className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="https://i.ibb.co/dfWsYhW/smiling-young-cleaning-guy-wearing-uniform-cap-holding-bucket-cleaning-tools-with-mop.jpg"
              alt="Image Description"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold  group-hover:text-gray-600 dark:text-gray-200">
              Coming Soon...
            </h3>
            <p className="mt-3  dark:text-gray-200">
              Prelineinnovative broadcast studio
            </p>
            <div className="flex gap-4 justify-between items-center">
              <a className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                Github
              </a>
              <a className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                Live Site
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
