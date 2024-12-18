const Footer = () => {
  return (
    <>
      <a name="contact"></a>
      <footer>
        <div className="content">
          <div className="top">
            <nav>
              <strong>Navegação</strong>
              <a href="./">Início</a>
              <a href="#contato">Contato</a>
              <a href="#sobre">Sobre</a>
            </nav>
            <nav>
              <strong>Contate-nos</strong>
              <a href="" className="social-item">
                <i className="fi fi-brands-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="" className="social-item">
                <i className="fi fi-brands-twitter-alt"></i>
                <span>Twitter</span>
              </a>
              <a href="" className="social-item">
                <i className="fi fi-brands-whatsapp"></i>
                <span>Whatsapp</span>
              </a>
            </nav>
            <div className="logo">
              <img src="/public/images/logo.png" alt="" />
            </div>
          </div>
          <div className="bottom">
            <span>© Copyright Bons Fluidos - 2024</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
