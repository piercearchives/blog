import logosvg from '../../svg/logo.svg'

const Header = () =>{

  const desclogo = 'esta é a logo do blog.';

  return (
    <>
    <header className='flex-space-between'>
      <div className="logo">
        <img src={logosvg} alt={desclogo} />
      </div>
      <div className="search">
      <input type='text' name='search' className='input-search'/>
      </div>
      <ul className="menu">
      <li> <a href='categories' className='nav-link'>Categories</a></li>
      <li> <a href='about' className='nav-link'>About</a></li>
      <li> <a href='content' className='nav-link'>Contact</a></li>
      </ul>
    </header>
    </>
  );
}

export default Header;