import logo from "/images/logo.png";
import "./logo-styles.css";


function Logo() {
    return (
        <>
            <div className="logo-container">
                <img src={logo} />
            </div>
            <div className="logo-tittle">
                <p>PetDop Pet Shelter</p>
            </div>
        </>
    )
}

export default Logo;