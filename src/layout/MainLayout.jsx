import { BookOpen, Chats, HouseLine, ImageSquare, Package, ReadCvLogo } from "@phosphor-icons/react";
import { NavLink, Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="bg-red-300 h-screen">
        <div className="max-w-screen-xl  mx-auto h-full">
        <div className="flex w-full pt-12 px-20 pb-36 h-full ">
                <div className="w-52">
                    <div className="pb-6">
                        <img src="https://themesvila.com/themes-wp/abru/wp-content/themes/abru/assets/img/logo.png" alt="" />
                    </div>
                    <div className="flex pr-12 flex-col  space-y-1.5">
                        <NavLink to='/' className=" font-sans bg-white text-center py-2 rounded-lg flex px-4 items-center gap-2"><HouseLine size={24} /> About</NavLink>
                        <NavLink to='/resume' className=" font-sans bg-white text-center py-2 rounded-lg flex px-4 items-center gap-2" ><ReadCvLogo size={24} />Resume</NavLink>
                        <NavLink className=" font-sans bg-white text-center py-2 rounded-lg flex px-4 items-center gap-2"><Package size={24} />Service</NavLink>
                        <NavLink className=" font-sans bg-white text-center py-2 rounded-lg flex px-4 items-center gap-2" ><ImageSquare size={24} />Portfolio</NavLink>
                        <NavLink className=" font-sans bg-white text-center py-2 rounded-lg flex px-4 items-center gap-2"><BookOpen  size={24} /> Blog</NavLink>
                        <NavLink className=" font-sans bg-white text-center py-2 rounded-lg flex px-4 items-center gap-2" ><Chats size={24} />Contact</NavLink>
                       
                    </div>
                    <p className=" text-white pt-12">© 2023 Abru<br />All Rights Reserved.</p>
                </div>
                <div className="bg-white rounded-lg w-10/12 overflow-scroll">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MainLayout;