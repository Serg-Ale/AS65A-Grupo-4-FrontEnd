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
            Lorem ipsum <br />
            dolor sit amet
          </h1>
          <p>
            Consectetur adipiscing elit. Etiam quam augue, scelerisque eu leo
            id, lobortis laoreet turpis. Nam ac semper nulla. Aenean vitae eros
            volutpat, maximus purus in, tristique elit. Cras elit quam, tempus id
            nisl a.
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
