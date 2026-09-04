// header e footer
import Header from 'pages/Header';
import Footer from 'pages/Footer';

// Images
import blog from '../../svg/blog.svg';

const About = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-nobreak-6">
            <h1 className="h0">
              Sobre<span>.</span>
            </h1>

           

            <p className="mt-1">
              
              Este projeto nasceu da vontade de transformar ideias em
              experiências. Um espaço onde conteúdo, design e tecnologia se encontram para dar forma
              a algo maior. Nada aqui é definitivo — cada página, interação e detalhe faz parte de
              um processo contínuo de construção. O que você vê agora é apenas uma parte do que está
              por vir. 
            </p>

           
            <a href="https://github.com/piercearchives" alt="botao" className="btn mt-4">
              Saber mais 
            </a>
          </div>

          <div className="grid-nobreak-4 ml-6">
            <img src={blog} alt="ilustração-hero" className="ilustration ml-2" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
