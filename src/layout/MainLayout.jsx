import {
  BookOpen,
  Chats,
  HouseLine,
  ImageSquare,
  Package,
  ReadCvLogo,
} from "@phosphor-icons/react";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { NavLink, Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";

const MainLayout = () => {
  const activeClass =
    "bg-black/10 backdrop-blur-lg bg-orange-500 text-white font-sans text-center py-2.5 rounded-md flex px-4 items-center gap-2";
  const defaultClass =
    "bg-black/10 backdrop-blur-lg hover:bg-orange-500 hover:text-white font-sans  text-white text-center py-2.5 rounded-md flex px-4 items-center gap-2";
  return (
    <div
      style={{
        backgroundImage: 'url("https://i.ibb.co/wYHL03d/peakpx.jpg")',
        // backgroundImage: 'url("/peakpx.jpg")',
      }}
      className="h-screen"
    >
      {/* animation Cursor */}
      <div className="App">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "black",
          }}
          outerStyle={{
            border: "3px solid #F97316",
          }}
        />
      </div>
      {/* https://i.ibb.co/wYHL03d/peakpx.jpg */}

      <div className="relative z-40 max-w-screen-xl  mx-auto h-full">
        <div className="flex w-full  md:pt-6 lg:pt-12  md:pb-6 lg:pb-12 xl:pb-20 justify-center h-full lg:px-6 xl:px-0">
          {/* sidebar */}
          <div className="hidden lg:block  w-2/12 ">
            {/* logo */}
            <div className="pb-6">
              <img
                className="w-40"
                src="https://themesvila.com/themes-wp/abru/wp-content/themes/abru/assets/img/logo.png"
                alt=""
              />
            </div>
            {/* lg menu */}
            <div className="flex pr-12 lg:pr-6 xl:pr-12 flex-col   space-y-2 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                <HouseLine size={22} /> About
              </NavLink>

              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                <ReadCvLogo size={22} />
                Resume
              </NavLink>

              <NavLink
                to="/skill"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                <Package size={22} />
                Skill
              </NavLink>

              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                <ImageSquare size={22} />
                Portfolio
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                <BookOpen size={22} /> Blog
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
              >
                <Chats size={22} />
                Contact
              </NavLink>
            </div>
            {/* copywrite */}
            <p className=" text-white pt-12">
              © 2023 Shorif
              <br />
              All Rights Reserved.
            </p>
          </div>
          {/* main content */}
          <div className="bg-black/10 backdrop-blur-lg text-white rounded-md w-full md:w-11/12 lg:w-10/12 overflow-auto">
            {/* mobile menu */}
            <div className="block lg:hidden w-full">
              {/* <div className="pb-6">
                            <img src="https://themesvila.com/themes-wp/abru/wp-content/themes/abru/assets/img/logo.png" alt="" />
                        </div> */}
              <div className="flex justify-center flex-wrap   space-y-1.5">
                <NavLink
                  to="/"
                  className=" hover:bg-orange-500 hover:text-white font-sans  text-center py-2.5 rounded-md flex px-4 items-center gap-2"
                >
                  <HouseLine size={22} /> About
                </NavLink>
                <NavLink
                  to="/resume"
                  className=" hover:bg-orange-500 hover:text-white font-sans  text-center py-2.5 rounded-md flex px-4 items-center gap-2"
                >
                  <ReadCvLogo size={22} />
                  Resume
                </NavLink>
                <NavLink
                  to="/skill"
                  className="hover:bg-orange-500 hover:text-white font-sans  text-center py-2.5 rounded-md flex px-4 items-center gap-2"
                >
                  <Package size={22} />
                  Skill
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className="hover:bg-orange-500 hover:text-white font-sans  text-center py-2.5 rounded-md flex px-4 items-center gap-2"
                >
                  <ImageSquare size={22} />
                  Portfolio
                </NavLink>
                <NavLink
                  to="/blog"
                  className="hover:bg-orange-500 hover:text-white font-sans  text-center py-2.5 rounded-md flex px-4 items-center gap-2"
                >
                  <BookOpen size={22} /> Blog
                </NavLink>
                <NavLink
                  to="/contact"
                  className="hover:bg-orange-500 hover:text-white font-sans  text-center py-2.5 rounded-md flex px-4 items-center gap-2"
                >
                  <Chats size={22} />
                  Contact
                </NavLink>
              </div>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      {/* showfall */}
      <div>
        <Snowfall
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
          }}
        />
      </div>
    </div>
  );
};

export default MainLayout;
