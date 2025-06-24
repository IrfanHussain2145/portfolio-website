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

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item,index)=>{
                return (
                    <motion.div variants={fadeIn("up", `0.${index}`)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0 }}>
                        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>} />
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default AllSkills