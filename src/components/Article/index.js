import Post from '../Post'

function Article(){
  return(
 <>
 <section className='container'>
  <h3 className='mx-2'>Articles</h3>
  <div className='mt-3 container-posts'>
    <Post subtitle="tecnologia" title="o guia definitivo sobre o blog">
Descubra como navegar perfeitamente pelo nosso site e aproveitar ao máximo todo o conteúdo exclusivo disponível.
    </Post>
    <Post subtitle="fotografia" title="quais as melhores câmeras em 2021?">
Confira nossa seleção especial dos modelos de câmeras mais seletivos e eficientes que se destacaram no mercado.
    </Post>
    <Post subtitle="cinema" title="os 10 filmes com maior bilheteria">
Relembre as maiores produções do cinema mundial que conquistaram o público e bateram recordes históricas de arrecadação.
    </Post>
  </div>
 </section>
 </>
  );
}

export default Article;