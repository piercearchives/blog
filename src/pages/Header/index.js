import logo from 'svg/blog-logo.svg';

// link
import { Link, useNavigate } from 'react-router-dom';

// hooks
import { useState } from 'react';
import Search from 'pages/Search';

const Header = () => {
  const initialValueForm = {
    search: '',
  };

  // variáveis de estado
  const [form, setForm] = useState(initialValueForm);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useNavigate para redirecionar
  const navigate = useNavigate();

  function onChange(event) {
    // desestruturação do valor e propriedade do campo
    const { value, name } = event.target;

    // pegando o valor antigo e adicionando o caracter novo
    setForm({ ...form, [name]: value });

    // console.log(form);
  }

  function handleSearch(e) {
    e.preventDefault();

    navigate(`/search/${form.search}`);
  }

  return (
    <>
      {/* Header */}
      <header className="px-2">
        <nav className="menu">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Blog" />
            </Link>
          </div>

          <ul className="menu">
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        {/* burguer menu*/}
        <button
          type="button"
          className={`bx nostyle ${isMenuOpen ? 'active' : ''}`}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div className="flex-start-row">
          <div className="search">
            <form className="flex" onSubmit={handleSearch} role="search">
              <label htmlFor="search-header" className="sr-only">
                Buscar no blog
              </label>

              <input
                id="search-header"
                type="search"
                name="search"
                placeholder="Buscar..."
                onChange={onChange}
              />

              <button type="submit" className="btn-search" aria-label="Pesquisar" />
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>

          <div className="cta-mobile">
            <Link to="/login" className="link color-primary">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* menu mobile */}
      <div className="relative">
        <div className={`menu-mobile ${isMenuOpen ? 'showmenu' : ''}`}>
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 px-2">
              <form className="flex">
                <input type="text" name="search" placeholder="Buscar..." />
                <button type="submit" className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
