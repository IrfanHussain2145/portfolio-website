import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { AiFillGithub } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
        <SingleContactSocial link='#' Icon={FiGithub} />
        <SingleContactSocial link='https://www.linkedin.com/in/irfhuss/' Icon={FaLinkedinIn} />
        <SingleContactSocial link='#' Icon={FaInstagram} />
    </div>
  )
}

export default ContactSocial