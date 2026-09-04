import Facebook from "../../svg/icon-facebook.svg";
import Instagram from "../../svg/icon-instagram.svg";
import Youtube from "../../svg/icon-youtube.svg";
import Twitter from "../../svg/icon-twitter.svg";
import LogoBlog2 from "../../svg/blog-logo2.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-section bt-black">
        <div className="container footer__container">
          <div className="row">
            <div className="flex-center">
              <img src={LogoBlog2} alt="Blog" className="icon-l" />
            </div>

            <div className="grid-4">
              <h3 className="mb-3">Posts</h3>
              <ul className="footer__list  ">
                <li>
                  <a href="#mais-vistos" className="footer__link color-gray">
                    Mais vistos
                  </a>
                </li>
                <li>
                  <a
                    href="#mais-comentados"
                    className="footer__link color-gray"
                  >
                    Mais comentados
                  </a>
                </li>
                <li>
                  <a href="#mais-populares" className="footer__link color-gray">
                    Mais populares
                  </a>
                </li>
                <li>
                  <a href="#mais-recentes" className="footer__link color-gray">
                    Mais recentes
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid-4">
              <h3 className="mb-3">Categorias</h3>
              <ul className="footer__list footer__list--categories">
                <li>
                  <a href="#tecnologia" className="footer__link">
                    Tecnologia
                  </a>
                </li>
                <li>
                  <a href="#games" className="footer__link">
                    Games
                  </a>
                </li>
                <li>
                  <a href="#fotografia" className="footer__link">
                    Fotografia
                  </a>
                </li>
                <li>
                  <a href="#cinema" className="footer__link">
                    Cinema
                  </a>
                </li>
                <li>
                  <a href="#entretenimento" className="footer__link">
                    Entretenimento
                  </a>
                </li>
                <li>
                  <a href="#moda" className="footer__link">
                    Moda
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid-4">
              <h3 className="footer__title">
                Quer ser avisado dos novos posts do blog?
              </h3>
              <p className="footer__text mt-3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>

              <form className="newsletter mt-4">
                <input
                  type="email"
                  name="newsletter"
                  placeholder="Digite seu e-mail aqui"
                  className="newsletter__input"
                />
                <button type="submit" className="btn newsletter__button">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              2026 | Todos os direitos reservados.
            </p>

            <div className="footer__socials">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="footer__social"
              >
                <img src={Facebook} alt=""></img>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="footer__social"
              >
                <img src={Instagram} alt=""></img>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="footer__social"
              >
                <img src={Youtube} alt=""></img>
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="footer__social"
              >
                <img src={Twitter} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
