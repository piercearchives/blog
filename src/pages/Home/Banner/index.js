const Banner = () => {
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src="/img/backrooms.png" alt="backrooms" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">01 NOV 2021</h6>
          <h6 className="uppercase color-primary text-center">FILMES</h6>

          <h3 className="text-center">
            Medo de Salas Vazias: Como The Backrooms Redefiniu o Terror Psicológico
          </h3>
          <p className="mt-1 text-center">
            Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend.{' '}
          </p>

          <div className="mt-3 my-3 flex-center">
            <a href="#link" alt="ler mais" className="link color-primary">
              Ler mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
