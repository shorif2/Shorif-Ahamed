

const Resume = () => {
    return (
        <div className="mx-12 my-10">
            <h2 className="text-5xl font-semibold text-center">Resume</h2>
            <hr className="border border-orange-500 w-24 mt-4 mx-auto text-orange-500 bg-orange-500" />

            <div className="flex gap-6">
                {/* 1st  */}

                <div className="">
                    <h3 className="font-medium text-2xl pt-16 border-b-2 pb-4">Education</h3>
                    <div className="pt-12">
                        <h3 className="text-2xl pb-6">
                            University Of Rajshahi
                        </h3>

                        <h4 className="text-xl font-medium mb-2"><button className="btn btn-outline outline-orange-600 btn-sm mb-2">2016</button> - Bachelor's Degree in Computer Science.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nihil.</p>
                    </div>
                    <div className="pt-12">
                        <h3 className="text-2xl pb-6">
                            University Of Rajshahi
                        </h3>

                        <h4 className="text-xl font-medium mb-2"><button className="btn btn-outline outline-orange-600 btn-sm mb-2">2016</button> - Bachelor's Degree in Computer Science.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nihil.</p>
                    </div>
                </div>
                {/* 2nd */}
                <div className="">
                    <h3 className="font-medium text-2xl pt-16 border-b-2 pb-4">Experience</h3>
                    <div className="pt-12">
                        <h3 className="text-2xl pb-6">
                            University Of Rajshahi
                        </h3>

                        <h4 className="text-xl font-medium mb-2"><button className="btn btn-outline outline-orange-600 btn-sm mb-2">2016</button> - Bachelor's Degree in Computer Science.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, nihil.</p>
                    </div>

                </div>
            </div>

            {/* skill */}
            <div className="flex gap-6 w-full pt-16">
                <div className="w-full shadow-xl">
                    <h2 className="text-2xl font-medium">Design Skills</h2>
                    <div className=" p-6 space-y-8">
                        {/* main */}
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className="w-full">
                    <h2 className="text-2xl font-medium">Coding Skills</h2>
                    <div className=" shadow-xl p-6 space-y-8">
                        {/* main */}
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    <div>
                    <p>Logo Design</p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">

                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }} > 45%</div>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Resume;