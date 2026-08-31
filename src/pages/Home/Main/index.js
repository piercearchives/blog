const Hero = () => {
  return (
    <>
      <div className="py-4 bb-black">
        <h6 className="color-gray">01 NOV 2021</h6>
        <h6 className="uppercase color-primary">FOTOGRAFIA</h6>

        <h4>
          As melhores câmeras custo benefício para uso profissional em 2026.
        </h4>
        <p className="mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. .
        </p>
        <div className="flex-start-row mt-3">
          <div className="profile">
            <img
              src="/img/profile/jp.jpg"
              alt="perfil do jp"
              className="profile-img"
            />
          </div>
          <div className="ml-1">
            <h6 className="color-primary">Joseph</h6>
            <h6 className="color-gray">@joslyplit</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
