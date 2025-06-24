import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants'

const projects = [
    {
        name:'ML Stock Price Forecaster',
        year:'Jun2025',
        align:'right',
        image:'../../public/images/stockProjectImage2.jpg',
        link:'#',
    },
    {
        name:'Project 1',
        year:'OtherDate',
        align:'left',
        image:'../../public/images/stockProjectImage2.jpg',
        link:'#',
    },
    {
        name:'Project 2',
        year:'OtherDate2',
        align:'right',
        image:'../../public/images/stockProjectImage2.jpg',
        link:'#',
    },
    {
        name:'Project 3',
        year:'OtherDate3',
        align:'left',
        image:'../../public/images/stockProjectImage2.jpg',
        link:'#',
    },
];

const ProjectsMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4">
        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }}>
            <ProjectsText />
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((item,index) => {
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default ProjectsMain