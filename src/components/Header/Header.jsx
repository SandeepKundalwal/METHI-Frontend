import { headerLogo, profilePic } from '../../assets/images';
import { hamburger, hamburgerClose } from '../../assets/icons';
import { links, profileDropDown } from '../../constants';
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
        <header className="py-4 px-8 absolute z-10 w-full bg-navbar">
            {/* Desktop Navbar Menu */}

            <nav ref={ref} className="flex justify-between items-center max-container">
                <span className="font-montserrat text-[22px] text-black font-semibold">METHI</span>
                <ul className="flex flex-4 justify-center items-center gap-16 max-lg:hidden">
                    {links.map((item) => {
                        if(item.id === 5){
                            if(isLoggedIn){
                                return (<div key="profile" className="relative">
                                    <img
                                        src={profilePic}
                                        alt="User Profile"
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                        onClick={() => setShowDropdown(!showDropdown)}
                                    />
                                    {showDropdown && (
                                        <div className="absolute top-12 right-0 z-10 bg-white shadow-md rounded-md">
                                            <ul className="py-2">
                                                {profileDropDown.map((profileItem) => {
                                                    console.log(profileItem.label);
                                                    return (<li key={profileItem.id}>
                                                        <NavLink
                                                            to= {profileDropDown.href}
                                                        >
                                                            {profileDropDown.label}
                                                        </NavLink>
                                                    </li>)
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>)
                            } else {
                                return (<li key = {item.id}>
                                    <NavLink
                                        to = {item.href}
                                        className= {({isActive}) => `font-montserrat leading-normal text-lg font-semibold ${isActive ? "text-orange-600" :  "text-black"}`}
                                    >
                                        {item.label}
                                    </NavLink> 
                                </li>)
                            }
                        } else {
                            // console.log(item.label);
                            return (<li key = {item.id}>
                                <NavLink
                                    to = {item.href}
                                    className= {({isActive}) => `font-montserrat leading-normal text-lg font-semibold ${isActive ? "text-orange-600" :  "text-black"}`}
                                >
                                    {item.label}
                                </NavLink> 
                            </li>)
                        }
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;