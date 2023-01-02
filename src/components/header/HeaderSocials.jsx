import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/konstantin-korolev-170235246" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/advpropsys" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://angel.co/u/konstantin-korolev-3" target ="_blank" rel="noreferrer" >< FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials