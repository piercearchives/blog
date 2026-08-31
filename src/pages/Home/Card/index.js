const Card = () => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="#gtaiv">
            <img src="/img/gta-vi.png" alt="img-gtavi" />
          </a>
        </div>

        <div className="mt-2 px-2 ">
          <h6 className="color-gray">01 NOV 2021</h6>
          <h6 className="uppercase color-primary">GAMES</h6>

          <h4>A Obra-Prima Incompreendida da Rockstar</h4>
          <p className="mt-1">Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend. </p>

          <div className="mt-3 my-3">
            <a href="#link" alt="ler mais" className="link color-primary">
              Ler mais
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
