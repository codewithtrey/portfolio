import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import eventImg from '../public/assets/projects/EventPro2.png';
import ProjectItem from './ProjectItem';
import prestigepalateImg from '../public/assets/projects/prestigepalate.png';
import autoImg from '../public/assets/projects/AutoEase.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-80'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Prestige Palate'
            backgroundImg={prestigepalateImg}
            projectUrl='/prestigepalate'
            tech='React'
          />
          <ProjectItem
            title='EventPro'
            backgroundImg={eventImg}
            projectUrl='/eventPro'
            tech='React'

          />
          <ProjectItem
            title='AutoEase'
            backgroundImg={autoImg}
            projectUrl='/autoEase'
            tech='React'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
