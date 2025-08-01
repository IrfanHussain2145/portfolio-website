import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants'

const projects = [
    {
        name:'NFL Playoff Prediction Model',
        year:'Aug2025',
        align:'right',
        image:'/images/nfl-playoffs-logo1.avif',
        link:'https://github.com/IrfanHussain2145/nfl-playoff-prediction-model',
    },
    {
        name:'ML Stock Price Forecaster',
        year:'Jun2025',
        align:'left',
        image:'/images/stockProjectImage2.jpg',
        link:'#',
    },
    {
        name:'BoilerSync',
        year:'2024',
        align:'right',
        image:'/images/BoilerSyncLogo.avif',
        link:'https://github.com/IrfanHussain2145/GP-ForkedRepo-BoilerSync',
    },
    {
        name:'BudgetTracker',
        year:'2023',
        align:'left',
        image:'/images/BudgetTrackerLogo2.jpg',
        link:'https://github.com/IrfanHussain2145/GP-ForkedRepo-BudgetTracker',
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
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />
            })}
        </div>
    </div>
  )
}

export default ProjectsMain