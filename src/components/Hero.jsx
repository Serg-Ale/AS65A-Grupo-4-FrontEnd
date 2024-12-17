const Hero = () => {
  return (
    <div className="hero">
      <img
        className="absolute-border"
        src="/images/banner-border.png"
        alt="Decorativo"
      />
      <div className="background"></div>
      <div className="content">
        <div className="heading">
          <h1>
            <strong>bons fluidos</strong> <br />
            Dignidade para cada período
          </h1>
          <p>
            O Projeto Bons Fluidos mobiliza doações de absorventes para combater
            a pobreza menstrual e apoiar quem mais precisa.
          </p>
          <a href="#" className="button alt">
            Ver mais <i className="fi fi-rr-arrow-small-right"></i>
          </a>
        </div>
        <div className="image">
          <img src="/images/hero.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
