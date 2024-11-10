import Header from "../components/Header.jsx";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="login-modal">
        <div className="box">
          <form action="">
            <h2>entrar</h2>
            <div className="input-item">
              <label>usuário:</label>
              <input type="text" placeholder="digite seu nome..." />
            </div>
            <div className="input-item">
              <label>senha:</label>
              <input type="password" placeholder="digite sua senha..." />
              <span>
                para cadastrar, entre em contato com os <br /> coordenadores do
                projeto <strong>bons fluidos</strong>
              </span>
            </div>
            <div className="submit-area">
              <button className="button submit">
                <img src="../../public/images/favicon-white.png" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hero">
        <img
          className="absolute-border"
          src="../../public/images/banner-border.png"
          alt=""
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
              id, lobortis laoreet turpis. Nam ac semper nulla. Aenean vitae
              eros volutpat, maximus purus in, tristique elit. Cras elit quam,
              tempus id nisl a.
            </p>
            <a href="" className="button alt">
              ver mais <i className="fi fi-rr-arrow-small-right"></i>
            </a>
          </div>
          <div className="image">
            <img src="../../public/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
