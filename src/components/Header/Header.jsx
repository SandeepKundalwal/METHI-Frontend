import { headerLogo } from '../../assets/images';
import { hamburger, hamburgerClose } from '../../assets/icons';
import { links } from '../../constants';
import { useState, useRef, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    // if user clicks anywhere on the screen, hide the hamburger menu
    const ref = useRef();
    useEffect(() => {
        const handler = (e) => {
            if(navbarOpen && ref.current && !ref.current.contains(e.target)){
                setNavbarOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [navbarOpen]);


    return (
        <header className="py-4 px-8 absolute z-10 w-full bg-navbar">
            {/* Desktop Navbar Menu */}

            <nav ref={ref} className="flex justify-between items-center max-container">
                <span className="font-montserrat text-[22px] text-black font-semibold">METHI</span>
                <ul className="flex flex-4 justify-center items-center gap-16 max-lg:hidden">
                    {links.map((item) => (
                        <li key = {item.id}>
                            <NavLink
                                to = {item.href}
                                className= {({isActive}) => `font-montserrat leading-normal text-lg font-semibold ${isActive ? "text-orange-600" :  "text-black"}`}
                            >
                                {item.label}
                            </NavLink> 
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={navbarOpen ? hamburgerClose : hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                        onClick={() => setNavbarOpen((prev) => !prev)}
                        style={{cursor:'pointer', transition:'ease-in-out 2s'}}
                    />
                </div>
            </nav>
            {navbarOpen && (
                <div className="fixed top-20 right-8 z-50 bg-white p-4 rounded-lg shadow-lg border-black" onClick= {() => setNavbarOpen(false)}>
                    <nav>
                        <ul className="flex-col hidden max-lg:block gap-6">
                            {links.map((item) => (
                                <li key= {item.id}>
                                    <NavLink 
                                        to= {item.href}
                                        // className="font-montserrat font-semibold cursor-pointer text-black hover:text-blue-600"
                                        
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;