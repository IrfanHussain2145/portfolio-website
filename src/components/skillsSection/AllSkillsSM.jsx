import React from 'react'
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants'

const skills = [{
    skill:'Python',
    icon: FaPython,
},
{
    skill:'PyTorch',
    icon: SiPytorch,
},
{
    skill:'SQL',
    icon: BiLogoPostgresql,
},
{
    skill:'ReactJS',
    icon: RiReactjsFill,
},
{
    skill:'Java',
    icon: FaJava,
},
{
    skill:'NodeJS',
    icon: FaNodeJs,
},
{
    skill:'TailwindCSS',
    icon: RiTailwindCssFill,
},
{
    skill:'AWS',
    icon: FaAws,
}
];
const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item,index)=>{
            return (
                <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.7 }}
                key={index} className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-orange'/>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </motion.div>
            )
        })}
    </div>
  )
}

export default AllSkillsSM