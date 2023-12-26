import React from "react";
import styles from './Nav.module.scss'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookHeart } from 'react-icons/bi'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { RiMessage2Line } from 'react-icons/ri'
import Tooltip from './Tooltip'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Tooltip content="About"><a href="#"><AiOutlineUser /></a></Tooltip>
            <Tooltip content="Expirience"><a href="#experience"><BiBookHeart /></a></Tooltip>
            <Tooltip content="Portfolio"><a href="#portfolio"><BiBriefcaseAlt2 /></a></Tooltip>
            <Tooltip content="Contact"><a href="#testimonials"><RiMessage2Line /></a></Tooltip>
        </nav>
    );
}



export default Nav