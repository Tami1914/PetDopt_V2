import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import "./SocialMedia.css";

function SocialMedia() {
    return (
        <>
            <div className="social-media-container">
                <div className="social-media-icon">
                    <a href="https://www.instagram.com/miwukiofficial/">
                        <FontAwesomeIcon className="instagram" icon={faInstagram} />
                    </a>
                    <a href="./rss/RSS.xml">
                        <FontAwesomeIcon className="rss" icon={faSquareRss} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default SocialMedia;