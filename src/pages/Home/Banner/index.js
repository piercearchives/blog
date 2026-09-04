const Banner = ( {content} ) => {
  return (
    <>
      <section className="container">
        <div className="img-banner hidden">
          <img src={content.imageUrl} alt="" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">{content.date}</h6>
          <h6 className="uppercase color-primary text-center">{content.category}</h6>

          <h3 className="text-center">
            {content.title}
          </h3>
          <p className="mt-1 text-center">
           {content.resume}
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
