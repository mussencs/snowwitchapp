import {React, useState} from 'react'
import {NavLinks} from '../constants';
import {logo} from '../assets/images';
import { ImMenu } from 'react-icons/im'
import { AiFillCloseSquare } from 'react-icons/ai'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='ss:section-div-row'>
            <div className='flex'>
                <a href="/snowwitchapp/">
                    <img src={logo} alt="snowwitch" className="ss:flex hidden w-[100px]"/>
                    <h1 className="ss:hidden flex header-font">SnowWitch</h1>
                </a>
            </div>
            <div className='flex w-full'>
                <nav className='section-div-col bg-gray-800 py-2 rounded-lg '>
                    <ul className='ss:flex hidden w-full'>
                        {NavLinks.map((nav, index) => (
                            <li
                                key = {nav.id}
                                className='nav-element linked-item'
                            >
                                <a href={`/${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div 
                        className='ss:hidden react-icon'
                        onClick={() => setToggle((prev) => !prev)}
                    >
                        {toggle ? <AiFillCloseSquare size={'3em'}/> : <ImMenu size={'3em'}/>}
                    </div>
                    <ul className={`${toggle ? 'flex' : 'hidden'} section-div-col`}>
                        {NavLinks.map((nav, index) => (
                            <li
                                key = {nav.id}
                                className='nav-element linked-item'
                            >
                                <a href={`/${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
        
    )
}

export default Navbar