import footerWithInformation from "../../services/footerWithInformation/footerWithInformation";
import "./FooterText.css";

function FooterText() {
  return (
    <>
      <div className="footer-information-container">
        {
          footerWithInformation.map((footerText, index) => (
            <div key={index} className="text-list">
              <h2>{footerText.tittle}</h2>
              <a href="">{footerText.info1}</a>
              <a href="">{footerText.info2}</a>
              <a href="">{footerText.info3}</a>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default FooterText;