import { AiOutlineGithub, AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom'

import { GiMountainRoad } from "react-icons/gi";


import './menu.css'

export default function Menu() {
  return (
    <div className='menu'>
      <a href="https://www.linkedin.com/in/poulainpatricia" target="_blank" rel="noreferrer" className="social">
        <AiFillLinkedin size={24} color="FFF" /></a>
      <a href="https://github.com/englishwithpatricia007" target="_blank" rel="noreferrer" className='social'>
        <AiOutlineGithub size={24} color="FFF" /></a>
      <a href="https://www.youtube.com/@englishwithpatricia2730" target="_blank" rel="noreferrer" className='social'>
        <AiFillYoutube size={24} color="FFF" /></a>
      <a href="https://www.instagram.com/englishwithpatricia007/" target="_blank" rel="noreferrer" className='social'>
        <AiFillInstagram size={24} color="FFF" /></a>
      <a href="https://englishwithpatricia007.github.io/sobremim/" target="_blank" rel="noreferrer" className='social'>
        <GiMountainRoad size={24} color="FFF" /></a>

      <Link className="menu-item" to={"/links"}>Meus Links</Link>
    </div>
  )
}