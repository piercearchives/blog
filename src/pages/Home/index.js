import blog from '../../svg/blog.svg'

const Home = () => {
  return (
   <>
   {/* hero */}
<section className='container'>
  <div className='row'>
    <div className='grid-nobreak-6 '>
      <h1 className='h0'>Blog<span>.</span></h1>
      <p className='mt-1'>um blog para todos. Escrever. Ler. Comentar. Contribuir. Conectar.</p>
      <a href='#botao' alt='botao' className='btn mt-4'>Começar a escrever</a>
    </div>

    <div className='grid-nobreak-6'>
      <img src={blog} alt="ilustração-hero" className='ilustration' />
    </div>
  </div>
</section>
   </>
  );
}

export default Home;