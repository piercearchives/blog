// header e footer
import Header from 'pages/Header'
import Footer from 'pages/Footer'

// images
import imgProfile from 'img/profile/hp.jpg'

const Profile = () => {
  return (
<>

<Header />

<section className='container'>
  <div className='row'>
    <div className='grid-6'>
      <div className='flex-start-row'>
        <div className='profile-big'>
          <img src={imgProfile} alt='perfil do pierce' className='profile-img'></img>
        </div>
        <div className='ml-3'>
          <h3>Rodrigo Pierce</h3>
          <h6 className='color-gray'>Author</h6>
        </div>
        
      </div>
      <p className='mt-3'>Olá, sejam bem-vindos ao meu perfil!</p>
    </div>
    <div className='grid-6'>
      <a href='#meusDados' alt='dados' className='btn'>Meus Dados</a>
      <a href='#adicionarPost' alt='dados' className='btn ml-3'>Adicionar Post</a>
    </div>
  </div>
</section>

<section className='container'>
<h3>Adicionar um novo post</h3>
<p className='mt-1'>
  Preenchar os camps abaixo para adicionar um novo post ao blog.
</p>

<form>

  <div className='row'>
  <div className='grid-3 p-0'>
    <label htmlFor='date'><h6>Data</h6></label>
    <input type='date' id='date' name='date' className='mt-1'/>
  </div>

  <div className='grid-3 p-0'>
     <label htmlFor='category'><h6>Categoria</h6></label>
    <select id='category' name='category' className='mt-1'>
      <option value='tecnologia'>tecnologia</option>
      <option value='games'>games</option>
      <option value='fotografia'>fotografia</option>
      <option value='cinema'>cinema</option>
    </select>
  </div>

  <div className='grid-6 p-0'>
    <label htmlFor='title'><h6>Título</h6></label>
    <input type='text' id='title' name='title' className='mt-1'/>
  </div>
</div>




<div className='row'>
  <div className='grid-9  p-0'>
     <label htmlFor='resume'><h6>Resumo</h6></label>
    <input type='text' id='resume' name='resume' className='mt-1'/>
  </div>
  <div className='grid-3  p-0'>
    <label htmlFor='duration'><h6>Duração</h6></label>
    <select id='duration' name='duration' className='mt-1'>
      <option value='tecnologia'>5min</option>
      <option value='games'>7min</option>
      <option value='fotografia'>15min</option>
      <option value='cinema'>9min</option>
    </select>
  </div>
</div>


<div className='row'>
  <div className='grid-12'>
     <label htmlFor='description'><h6>Descrição</h6></label>
    <textarea name='description' id='description' className='w-100' rows='10'></textarea>
  </div>
</div>

<div className='row flex-end-row'>
<button className='btn mr-2'> Adicionar</button>
</div>
</form>
</section>


<Footer />

</>
  );
}

export default Profile;