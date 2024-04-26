import Logo from "../logo/Logo";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from "../menu/Menu";
import { useState, useEffect } from "react";
import SocialMedia from "../socialMedia/SocialMedia";


function Header() {
    const [menuVisibility, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility(menuVisibility ? false : true);
    }

    const handleResize = () => {
        setMenuVisibility(window.innerWidth >= 768);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="top-bar">
                <Logo />
                <SocialMedia />
                <div className="icons">
                    <FontAwesomeIcon className="zoom" icon={faMagnifyingGlass} />
                    <FontAwesomeIcon className="bars" onClick={toggleMenu} icon={faBars} />
                </div>
            </div>
            {menuVisibility ? <Menu /> : ""}
        </>
    )
}

export default Header;