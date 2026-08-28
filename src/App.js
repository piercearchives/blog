

import './script';


function App() {
  return (
    <>
    {/* reader */}
      <header className='px-2'>
        <nav>
          <div className="logo">
            <a href="#logo">
              <img src='/svg/blog-logo.svg' alt="Blog" />
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

{/* hero */}
<section className='container'>
  <div className='row'>
    <div className='grid-nobreak-6 '>
      <h1 className='h0'>Blog<span>.</span></h1>
      <p className='mt-1'>um blog para todos. Escrever. Ler. Comentar. Contribuir. Conectar.</p>
      <a href='#botao' alt='botao' className='btn mt-4'>Começar a escrever</a>
    </div>

    <div className='grid-nobreak-6'>
      <img src='/svg/blog.svg' alt="logo do blog" />
    </div>
  </div>
</section>
      

      {/* main posts */}

      <section className='container'>
        <div className='row'>
          <div className='grid-6'>

            <img src='/svg/icon-star.svg' alt='' className='icon-l mt-2' />
            <h3 className='mt-2'> os melhores e mais bem votados posts deste mês</h3>
            <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero placeat iste numquam inventore dolore. Natus dolorum alias architecto tenetur reiciendis dicta doloribus. Beatae quia doloremque animi veritatis vero, ipsum quod.</p>

          </div>
          <div className='grid-6'>    






            <div className='py-4 bb-black'>
            <h6 className='color-gray'>01 NOV 2021</h6>
            <h6 className='uppercase color-primary'>FOTOGRAFIA</h6>

            <h4>As melhores câmeras custo benefício para uso profissional em 2026.</h4>
            <p className='mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. .</p>
            <div className='flex-start-row mt-3'>
            <div className='profile'>
              <img src='/img/profile/jp.jpg' alt='perfil do jp' className='profile-img'/>
            </div>
            <div className='ml-1'>
              <h6 className='color-primary'>Joseph</h6>
              <h6 className='color-gray'>@joslyplit</h6>
            </div>
            </div>
            </div>



            <div className='py-4 bb-black'>
            <h6 className='color-gray'>01 NOV 2021</h6>
            <h6 className='uppercase color-primary'>TECNOLOGIA</h6>

            <h4>Se vende muito é porque a UX é boa. Será?</h4>
            <p className='mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. .</p>
            <div className='flex-start-row mt-3'>
            <div className='profile'>
              <img src='/img/profile/py.jpg' alt='perfil do jp' className='profile-img'/>
            </div>
            <div className='ml-1'>
              <h6 className='color-primary'>Pierce</h6>
              <h6 className='color-gray'>@piercearchives</h6>
            </div>
            </div>
            </div>
            
          
            
          </div>
        </div>
      </section>

{/* more views */}

<section className='container'>
  <h3>Posts com mais visitas</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dignissimos similique vitae quas modi libero, laboriosam mollitia numquam,</p>

  <div className='row'>
    <div className='grid-4 card p-0'>
      <div className='thumb hidden'>
        <a href='#gtaiv'>
          <img src='/img/gta-vi.png' alt='img-gtavi'/>
        </a>
      </div>

      <div className='mt-2 px-2 '>
        <h6 className='color-gray'>01 NOV 2021</h6>
            <h6 className='uppercase color-primary'>GAMES</h6>

            <h4>A Obra-Prima Incompreendida da Rockstar</h4>
            <p className='mt-1'>Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend.   </p>

            <div className='mt-3 my-3'>
              <a href='#link' alt='ler mais' className='link color-primary' >Ler mais</a>
            </div>
            
      </div>
      </div>


      <div className='grid-4 card p-0'>
      <div className='thumb hidden'>
        <a href='#react'>
          <img src='/img/work-coffe.png' alt='img-react'/>
        </a>
      </div>

      <div className='mt-2 px-2 '>
        <h6 className='color-gray'>01 NOV 2021</h6>
            <h6 className='uppercase color-primary'>TECNOLOGIA</h6>

            <h4>Fim da Otimização Manual no React</h4>
            <p className='mt-1'>Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend. </p>

            <div className='mt-3 my-3'>
              <a href='#link' alt='ler mais' className='link color-primary' >Ler mais</a>
            </div>
            
      </div>
    </div>

    <div className='grid-4 card p-0'>
      <div className='thumb hidden'>
        <a href='#gtaiv'>
          <img src='/img/codding-full-stack.png' alt='img-fullstack'/>
        </a>
      </div>

      <div className='mt-2 px-2 '>
        <h6 className='color-gray'>01 NOV 2021</h6>
            <h6 className='uppercase color-primary'>TECNOLOGIA</h6>

            <h4>Full-Stack Unificado em TypeScript</h4>
            <p className='mt-1'>Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend. </p>

            <div className='mt-3 my-3'>
              <a href='#link' alt='ler mais' className='link color-primary' >Ler mais</a>
            </div>
            
      </div>
    </div>
    
  </div>
</section>


{/* banner */}

<section className='container'>
  <div className='img-banner hidden'>
    <img src='/img/backrooms.png' alt='backrooms' />
  </div>
  <div className='row mt-3'>
    <h6 className='color-gray text-center'>01 NOV 2021</h6>
            <h6 className='uppercase color-primary text-center'>FILMES</h6>

            <h3 className='text-center'>Medo de Salas Vazias: Como The Backrooms Redefiniu o Terror Psicológico</h3>
            <p className='mt-1 text-center'>Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend. </p>

            <div className='mt-3 my-3 flex-center'>
              <a href='#link' alt='ler mais' className='link color-primary' >Ler mais</a>
            </div>
  </div>
</section>

{/* POSTS MAIS RECENTES */}

<section className='container'>
  <h3>Posts recentes</h3>

<div className='row'>
  <article className='grid-4'>
<div className='row'>
  {/* data */}
  <div className='grid-3'>
    <h6 className='color-gray'>JUL</h6>
    <h4 className='color-primary'>18</h4>
  </div>

{/* conteudo */}

<div className='grid-9'>
 <h6 className='uppercase color-primary'>GAMES</h6>
 <h4 className='mt-1'>PC Gamer Barato Roda Tudo?</h4>
 <p className='mt-1'>Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend.</p>

 <div className='flex-start-row mt-2'>
<div className='profile'>
  <img src='/img/profile/py.jpg' alt='foto de chloe' className='profile-img' />
</div>

<div className='ml-1'>
  <h6 className='color-primary'>Fulano de tal</h6>
  <p className='color-gray'>@autor</p>
</div>
 </div>
</div>

</div>
  </article>


<article className='grid-4'>
<div className='row'>
  {/* data */}
  <div className='grid-3'>
    <h6 className='color-gray'>JUL</h6>
    <h4 className='color-primary'>18</h4>
  </div>

{/* conteudo */}

<div className='grid-9'>
 <h6 className='uppercase color-primary'>TECNOLOGIA</h6>
 <h4 className='mt-1'>Como a IA Está Transformando a Edição de Fotos (Para o Bem e Para o Mal)</h4>
 <p className='mt-1'>Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend.</p>

 <div className='flex-start-row mt-2'>
<div className='profile'>
  <img src='/img/profile/cl.jpg' alt='foto de chloe' className='profile-img' />
</div>

<div className='ml-1'>
  <h6 className='color-primary'>Fulano de tal</h6>
  <p className='color-gray'>@autor</p>
</div>
 </div>
</div>

</div>
  </article>



<article className='grid-4'>
<div className='row'>
  {/* data */}
  <div className='grid-3'>
    <h6 className='color-gray'>JUL</h6>
    <h4 className='color-primary'>18</h4>
  </div>

{/* conteudo */}

<div className='grid-9'>
 <h6 className='uppercase color-primary'>FOTOGRAFIA</h6>
 <h4 className='mt-1'>Smartphones vs Câmeras Profissionais: A Distância Está Diminuindo?</h4>
 <p className='mt-1'>Lorem ipsum dolor sit amet consectetur. Tortor dolor in eleifend.</p>

 <div className='flex-start-row mt-2'>
<div className='profile'>
  <img src='/img/profile/jp.jpg' alt='foto de chloe' className='profile-img' />
</div>

<div className='ml-1'>
  <h6 className='color-primary'>Fulano de tal</h6>
  <p className='color-gray'>@autor</p>
</div>
 </div>
</div>

</div>
  </article>



</div>








</section>


    </>
  );
}

export default App;
