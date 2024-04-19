import Logo from "../logo/Logo";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from "../menu/Menu";
import { useState } from "react";

function Header() {
    const [menuVisibility, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility(menuVisibility ? false : true);
    }

    return (
        <>
            <div className="top-bar">
                <Logo />

                <div className="icons">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
                </div>
            </div>
            {menuVisibility ? <Menu /> : ""}
        </>
    )
}

export default Header;