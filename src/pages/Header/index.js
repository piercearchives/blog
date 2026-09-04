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


    navigate(`/search/${form.search}`)
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

        {/* burguer menu */}
        <div className="bx" aria-label="Abrir menu" />

        <div className="flex-start-row">
          <div className="search">
            <form className="flex" onSubmit={handleSearch}>
              <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
              <button type="submit" className="btn-search"></button>
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
        <div className="menu-mobile">
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
