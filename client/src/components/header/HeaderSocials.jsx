import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiRender } from 'react-icons/si';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/yevhenii-kotenko/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/EugeneKotenko" target="_blank"><BsGithub /></a>
            <a href="https://render.com/" target="_blank"><SiRender /></a>
        </div>
    )
}

export default HeaderSocials