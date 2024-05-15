import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./CookiesWindow.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


function CookiesWindow() {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const hasVisitedBefore = localStorage.getItem('hasVisited');
        if (!hasVisitedBefore) {
            setShowModal(true);
            localStorage.setItem('hasVisited', true);
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div className="cookies-window-background">
                    <div className="cookies-window-container">
                        <div className="cookies-window-tittle">
                            <h1>Cookies</h1>
                        </div>
                        <div className="cookies-window-close-button">
                            <span className="close-button" onClick={closeModal}><FontAwesomeIcon className="close" icon={faXmark} /></span>
                        </div>
                        <div className="cookies-window-text">
                            <h1>¿QUÉ SON LAS COOKIES?</h1>

                            <p>Este sitio utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navegas. En
                                general, estas tecnologías pueden servir para finalidades muy diversas, como, por ejemplo, reconocerte como
                                usuario, obtener información sobre tus hábitos de navegación, o personalizar la forma en que se muestra el
                                contenido.</p>

                            <p>Los usos concretos que hacemos de estas cookies se describen a continuación.</p>

                            <h2>COOKIES DE TERCEROS</h2>

                            <p>Esta web utiliza cookies de terceros, CONOCE A TERCEROS:</p>

                            <p>www.googleads.g.doubleclick.net</p>

                            <p>www.google.com</p>

                            <p>www.platform.twitter.com</p>

                            <p>Ten en cuenta que, si acepta las cookies de terceros, deberás eliminarlas desde las opciones del navegador o desde el sistema ofrecido por el propio tercero.</p>

                            <p>Puedes informarte de las transferencias a terceros países que, en su caso, realizan los terceros identificados en esta
                                política de cookies en sus correspondientes políticas (ver los enlaces facilitados en el apartado “Conoce a terceros”).</p>

                            <h2>EJERCICIO DE DERECHOS</h2>

                            <p>Tienes derecho a conocer que datos sobre ti estamos tratando, rectificarlos, suprimirlos o limitar su tratamiento,
                                puedes hacerlo comunicándote con nosotros a través del siguiente hello@petdopt.com
                                También tienes derecho a retirar el consentimiento al tratamiento de datos en cualquier momento, puedes realizar
                                esta opción desde el panel de selección de preferencias.</p>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CookiesWindow;