import logo from "/images/logo.png";
import "./logo-styles.css";


function Logo() {
    return (
        <>
            <div className="logo-container">
                <img src={logo} />
            </div>
        </>
    )
}

export default Logo;