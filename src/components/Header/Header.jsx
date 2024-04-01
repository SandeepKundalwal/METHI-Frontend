import { headerLogo } from '../../assets/images';
import { hamburger, hamburgerClose } from '../../assets/icons';
import { links, profileDropDown, users } from '../../constants';
import { useState, useRef, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

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
        <header className="py-4 px-14 flex-col w-full bg-navbar z-10 overflow-hidden">

            {/* Desktop Navbar Menu */}

            <nav ref={ref} className="flex justify-between items-center">
                <div>
                    <span className="font-montserrat text-[22px] text-black font-semibold">METHI</span>
                </div>
                
                <div>
                    <ul className="flex justify-center items-center gap-16">
                        {links.map((item) => {
                            if(item.id === 5 && isLoggedIn){
                                return (
                                    <div key="profile" className="relative z-10">
                                        <img
                                            src={users[1].profilePicUrl}
                                            alt="User Profile"
                                            className="w-10 h-10 z-10 rounded-full cursor-pointer"
                                            onClick={() => setShowDropdown((prev) => !prev)}
                                        />
                                        {showDropdown && (
                                            <div className="absolute top-12 right-0 z-10 bg-white shadow-md rounded-md">
                                                <ul className="py-2 px-20 z-10 overflow-auto">
                                                    {profileDropDown.map((profileItem) => {
                                                        return (
                                                            <li key={profileItem.id} className='flex overflow-auto justify-evenly items-center text-black'>
                                                                <NavLink
                                                                    to= {profileItem.href}
                                                                >
                                                                    {profileItem.label}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )
                            } else {
                                return (
                                    <li key = {item.id}>
                                        <NavLink
                                            to = {item.href}
                                            className= {({isActive}) => `font-montserrat leading-normal text-lg font-semibold ${isActive ? "text-orange-600" :  "text-black"}`}
                                        >
                                            {item.label}
                                        </NavLink> 
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;