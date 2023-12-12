import { LiaFacebookF } from "react-icons/lia";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";


const Contact = () => {
    return (
        <div className="w-full">
            <div className="max-w-xl mx-auto pt-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            Contact Me
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            We'd love to talk about how we can help you.
                        </p>
                    </div>
                </div>
            {/* Contact Us */}
            <div className="flex gap-6 w-full px-12 pb-10  mx-auto">

                
                <div className="mt-12 w-2/6 space-y-4">
                    <div className="bg-red-100 p-4">
                       <p>You can Email Me Here</p>
                       <p className="font-medium">xshorifahamed@gmail.com</p>
                    </div>

                    <div className="bg-red-100 p-4">
                       <p>Give Me a Call on</p>
                       <p className="font-medium">+88017 97041241</p>
                    </div>
                    <div className="bg-red-100 p-4">
                       <p>Location</p>
                       <p className="font-medium">Rajshahi, BD</p>
                    </div>
                    <p className="text-lg font-medium pt-6">My Social Profiles</p>
                    <div className="flex gap-4">
                    <div className="bg-blue-950 text-xl text-white p-2 rounded">
                        <LiaFacebookF />
                    </div>
                    <div className="bg-sky-500 text-xl text-white p-2 rounded">
                        <TfiTwitter />
                    </div>
                    <div className="bg-red-500 text-xl text-white p-2  rounded">
                        <TfiInstagram />
                    </div>
                </div>
            

                </div>
                {/*  */}
                <div className="mt-12 w-4/6 mx-auto">
                    {/* Card */}
                    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                

                        <form>
                            <div className="grid gap-4 lg:gap-6">
                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="hs-firstname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">First Name</label>
                                        <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                                    </div>

                                    <div>
                                        <label htmlFor="hs-lastname-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Last Name</label>
                                        <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                                    </div>
                                </div>
                                {/* End Grid */}

                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="hs-email-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
                                        <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                                    </div>

                                    <div>
                                        <label htmlFor="hs-phone-number-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Subject</label>
                                        <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                                    </div>
                                </div>
                                {/* End Grid */}

                                <div>
                                    <label htmlFor="hs-about-contacts-1" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Message</label>
                                    <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"></textarea>
                                </div>
                            </div>
                            {/* End Grid */}

                            <div className="mt-6 grid">
                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Send inquiry</button>
                            </div>

                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-500">
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                    {/* End Card */}
                </div>


            </div>
        </div>
    );
};

export default Contact;