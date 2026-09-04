const Card = ( {content} ) => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="#gtaiv">
            <img src={content.imageUrl} alt="img-gtavi" />
          </a>
        </div>

        <div className="mt-4 px-3 ">
          <h6 className="color-gray">{content.date}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>

          <h4 className="mt-1">{content.title}</h4>
          <p className="mt-2">{content.resume}</p>

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
