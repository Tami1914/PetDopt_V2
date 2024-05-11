import FooterImage from "../footerImage/FooterImage";
import FooterText from "../footerText/FooterText";
import PetDoptFooterImage from "../petDoptFooterImage/PetDoptFooterImage";
import "./Footer.css"

function Footer() {
  return (
    <>

      <div className="footer-desc">

        <div className="footer-desc-text">
          <h2>Encuentra a miles de animales en adopción</h2>

          <h3>¿Estas pensando en adoptar? ¡Prueba PetDopt!</h3>

          <p>En PetDopt podras encontrar cientos de perros, cachorros, gatos, gatitos, hurones, conejos,
            cobayas, ratas, ratones, chinchillas, jerbos, cerdos, reptiles, aves... en adopción procedentes
            de protectoras y asociaciones de animales o perreras de todo el mundo
          </p>

          <p>Si estas pensando en adoptar o acoger a un animal, ¡Estas en el sitio adecuado!</p>

          <p>Adopta, salva una vida, gana un amigo. Con PetDopt.</p>
        </div>

        <div className="footer-desc-images">
          <PetDoptFooterImage/>
          <FooterImage />
        </div>

        <div className="footer-text-information">
          <FooterText />
        </div>

      </div>

      <div className="footer-term">
        <p>2023-2024©Una plataforma de <a className="pet" href="/home">PetDopt</a> con la colaboración de Fundación Affinity</p>
        <br />
        <a className="b" href="/terms">Términos y condiciones de uso</a>
        <a className="b" href="">Política y privacidad</a>
        <a className="b" href="/cookies">Cookies</a>
        <a className="b" href="">FAQ</a>
        <a className="b" href="">Contacto</a>
      </div>
    </>
  )
}

export default Footer;