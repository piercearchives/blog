import logo from 'svg/blog-logo.svg'

const Header = () => {
  return (

    <>

    {/* Header */}
      <header className='px-2'>
        <nav className='menu'>
          <div className="logo">
            <a href="#logo">
              <img src={logo} alt="Blog" />
            </a>
          </div>

          <ul className="menu">
            <li><a href="#categorias">Categorias</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        {/* burguer menu */}
        <div className="bx" aria-label="Abrir menu" />

        <div className='flex-start-row'>
          <div className="search">
            <form className='flex'>
              <input type="text" name="search" placeholder="Buscar..." />
              <button type="submit" className='btn-search'></button>
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <a href="#login" className="btn">Login</a>
          </div>

          <div className="cta-mobile">
            <a href="#login" className="link color-primary">Login</a>
          </div>
        </div>
      </header>


  {/* menu mobile */}
      <div className='relative'>
        <div className='menu-mobile'>
          <ul className='nav-mobile'>
            <li><a href='#categorias' className='link-menu-mobile'>Categorias</a></li>
            <li><a href='#sobre' className='link-menu-mobile'>Sobre</a></li>
             <li><a href='#contato' className='link-menu-mobile'>Contato</a></li>
              <li className='py-2 px-2'>
                <form className='flex'>
                  <input type="text" name="search" placeholder="Buscar..." />
              <button type="submit" className='btn-search'></button>
                </form>
              </li>
          </ul>
        </div>
      </div>

      </>
  );
}

export default Header;