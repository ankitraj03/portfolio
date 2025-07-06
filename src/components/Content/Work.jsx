import React, { useState, useRef, useEffect } from 'react';
import chasma from './img/chasmawala.png';
import chatbot from './img/chatbot.jpg';
import nexus from './img/code.png';
import pglife from './img/pglife.png';
import star from './img/star.png';
import shop from './img/shop.png';
import comm from './img/comm.png';

function Work() {
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const projectWorks = [
    {
      title: 'PG renting Website',
      desc: "A website which helps user to find available PG's in the city which they visit.",
      img: pglife,
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/ankitraj03/pgrent',
      live: 'https://pglife-seven.vercel.app/'
    },
    {
      title: 'Online Coding practice and Contest organizing Platform',
      desc: 'A minimalist website where people can organize and participate in online events.',
      img: nexus,
      tech: ['HTML', 'JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB', 'JWT', 'Context API'],
      github: 'https://github.com/ankitraj03/nexCode',
      
    },
    {
      title: 'Event Planner Portfolio',
      desc: 'A sleek Next.js demo showcasing a branded landing page with optimized Geist font and deploy-ready setup on Vercel for rapid prototyping. ',
      img: comm,
      tech: ['NextJS', 'Tailwind Css',],
      github: 'https://github.com/ankitraj03/starBranding',
      live:'https://star-branding.vercel.app/'
    },
    {
      title: 'Chatbot',
      desc: 'A Python chatbot based on supervised learning. It learns based on the info provided.',
      img: chatbot,
      tech: ['Python', 'PyTorch', 'NLTK'],
      github: 'https://github.com/ankitraj03/chatbot-python',
      live:'https://shopping-zeta-three.vercel.app/'
    },
    {
      title: 'Communion',
      desc: 'A simple and elegant page',
      img: comm,
      tech: ['React', 'Tailwind Css',],
      github: 'https://github.com/ankitraj03/Communion',
      live:'https://communion-beta.vercel.app/'
    },
    {
      title: 'ChasmaWala',
      desc: 'A user friendly e-commerce website for purchasing spectacles with virtual try-on.',
      img: chasma,
      tech: ['React', 'Tailwind', 'ML', 'Python', 'NodeJS'],
      github: 'https://github.com/ankitraj03/chasmawala',
      live: 'https://chasmawala.vercel.app',
    },
  ];

  const visibleProjects = showAll ? projectWorks : projectWorks.slice(0, 4);

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      setMaxHeight(showAll ? `${scrollHeight}px` : '2000px');
    }
  }, [showAll, visibleProjects]);

  return (
    <div className='mt-10'>
      <div className='flex'>
        <h1 className='text-[#07eafa] text-xl font-bold'>
          2. <span className='ml-2 text-white'>Something I've Created</span>
        </h1>
        <div className='border-t-[1px] border-gray-400 mt-4 ml-2 w-80' style={{ height: '2px' }}></div>
      </div>

      <div
        ref={contentRef}
        className='transition-all duration-700 ease-in-out overflow-hidden'
        style={{ maxHeight }}
      >
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className='mt-10 bg-[#112240] text-[#ccd6f6] p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center md:items-start transform transition-transform duration-300 hover:-translate-y-2'
          >
            <div className='flex-1'>
              <img src={project.img} alt={project.title} className='rounded-lg' />
            </div>
            <div className='flex-1'>
              <h3 className='text-[#64ffda] text-sm font-mono'>Featured Project</h3>
              <h2 className='text-2xl font-semibold mt-2 text-[#ccd6f6]'>{project.title}</h2>
              <p className='bg-[#0a192f] p-4 rounded-lg mt-4 text-sm text-[#8892b0]'>{project.desc}</p>
              <div className='flex flex-wrap mt-4 gap-4 text-sm font-mono text-[#8892b0]'>
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>

              <div className='mt-4 flex gap-4'>
                {project.live && (
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#64ffda] text-[#112240] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#0a192f] hover:text-[#64ffda] border border-[#64ffda] transition-all'
                  >
                    Live Link
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#64ffda] text-[#112240] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#0a192f] hover:text-[#64ffda] border border-[#64ffda] transition-all'
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projectWorks.length > 4 && (
        <div className='flex justify-center mt-10'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='bg-[#64ffda] text-[#112240] px-6 py-3 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#0a192f] hover:text-[#64ffda] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#64ffda]'
          >
            {showAll ? 'Hide projects' : 'Want to see more?'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Work;
