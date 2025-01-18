import React from 'react';
import chasma from './img/chasmawala.png';
import chatbot from './img/chatbot.jpg';
import nexus from './img/nexus.png';
import pglife from './img/pglife.png';


function Work() {
    return (
        <>
            <div className='mt-10'>
                <div className="flex">
                    <h1 className="text-[#07eafa] text-xl font-bold">
                        2. <span className="ml-2 text-white">Something I've Created</span>
                    </h1>
                    <div
                        className="border-t-[1px] border-gray-400 mt-4 ml-2 w-80"
                        style={{ height: "2px" }}
                    ></div>
                </div>
                <div>
                    <div className="mt-10 bg-[#112240] text-[#ccd6f6] p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = "https://github.com/ankitraj03/chasmawala"}>

                        <div className="flex-1">
                            <img
                                src={chasma}
                                alt="Halcyon Theme"
                                className="rounded-lg"
                            />
                        </div>


                        <div className="flex-1">
                            <h3 className="text-[#64ffda] text-sm font-mono">Featured Project</h3>
                            <h2 className="text-2xl font-semibold mt-2 text-[#ccd6f6]">
                                ChasmaWala
                            </h2>
                            <p className="bg-[#0a192f] p-4 rounded-lg mt-4 text-sm text-[#8892b0]">
                                A user friendly e-commerce website for purchasing spectacles with virtual try-on. People can compare which frame they should buy.
                            </p>
                            <div className="flex flex-wrap mt-4 gap-4 text-sm font-mono text-[#8892b0]">
                                <span>React</span>
                                <span>Tailwind</span>
                                <span>ML</span>
                                <span>Python</span>
                                <span>NodeJS</span>
                            </div>

                        </div>
                    </div>
                    <div className=" mt-10 bg-[#112240] text-[#ccd6f6] p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = "https://github.com/ankitraj03/pgrent"}>

                        <div className="flex-1">
                            <img
                                src={pglife}
                                alt="Halcyon Theme"
                                className="rounded-lg"
                            />
                        </div>


                        <div className="flex-1">
                            <h3 className="text-[#64ffda] text-sm font-mono">Featured Project</h3>
                            <h2 className="text-2xl font-semibold mt-2 text-[#ccd6f6]">
                                PGLife
                            </h2>
                            <p className="bg-[#0a192f] p-4 rounded-lg mt-4 text-sm text-[#8892b0]">
                                A website which helps user to find available PG's in the city which they visit.
                            </p>
                            <div className="flex flex-wrap mt-4 gap-4 text-sm font-mono text-[#8892b0]">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>BootStrap</span>

                            </div>

                        </div>


                    </div>

                    <div className=" mt-10 bg-[#112240] text-[#ccd6f6] p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = "https://github.com/ankitraj03/dev-projects/tree/main/nexus"} >

                        <div className="flex-1">
                            <img
                                src={nexus}
                                alt="Halcyon Theme"
                                className="rounded-lg"
                            />
                        </div>


                        <div className="flex-1">
                            <h3 className="text-[#64ffda] text-sm font-mono">Featured Project</h3>
                            <h2 className="text-2xl font-semibold mt-2 text-[#ccd6f6]">
                                Nexus
                            </h2>
                            <p className="bg-[#0a192f] p-4 rounded-lg mt-4 text-sm text-[#8892b0]">
                                A minimalist, light themed website where people can organize and participlate in online event
                            </p>
                            <div className="flex flex-wrap mt-4 gap-4 text-sm font-mono text-[#8892b0]">
                                <span>HTML</span>
                                <span>Javascript</span>
                                <span>NodeJS</span>
                                <span>ExpressJS</span>
                                <span>MongoDB</span>
                            </div>
                        </div>


                    </div>

                    <div className=" mt-10 bg-[#112240] text-[#ccd6f6] p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => window.location.href = "https://github.com/ankitraj03/chatbot-python"}>

                        <div className="flex-1">
                            <img
                                src={chatbot}
                                alt="Halcyon Theme"
                                className="rounded-lg"
                            />
                        </div>


                        <div className="flex-1">
                            <h3 className="text-[#64ffda] text-sm font-mono">Featured Project</h3>
                            <h2 className="text-2xl font-semibold mt-2 text-[#ccd6f6]">
                                Chatbot
                            </h2>
                            <p className="bg-[#0a192f] p-4 rounded-lg mt-4 text-sm text-[#8892b0]">
                                A python chatbot based on supervised learning. It learns based on the information provided by the user
                            </p>
                            <div className="flex flex-wrap mt-4 gap-4 text-sm font-mono text-[#8892b0]">
                                <span>Python</span>
                                <span>Pytorch</span>
                                <span>NLTK</span>
                            </div>

                        </div>

                      

                    </div>
                </div>
                <button className="mt-10 bg-[#64ffda] text-[#112240] px-6 py-3 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#0a192f] hover:text-[#64ffda] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda] " onClick={() => window.location.href = "https://github.com/ankitraj03/"}>
                            Want to see more?
                        </button>

            </div>
        </>
    ) 
}

export default Work