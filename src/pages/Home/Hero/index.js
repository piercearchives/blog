import blog from "../../../svg/blog.svg";


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* hero */}
      <section className="container">
        <div className="row">
          <div className="grid-nobreak-6 ">
            <h1 className="h0">
              Blog<span>.</span>
            </h1>
            <p className="mt-1">
              um blog para todos. Escrever. Ler. Comentar. Contribuir. Conectar.
            </p>
            <Link to='/login' alt="botao" className="btn mt-4">
              Começar a escrever
            </Link>
          </div>

          <div className="grid-nobreak-6">
            <img src={blog} alt="ilustração-hero" className="ilustration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
