// components

import Hero from './Hero';
import Banner from './Banner';
import Card from './Card';
import Main from './Main';

// figuras
import Star from '../../svg/icon-star.svg';

const Home = () => {
  return (
    <>
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-6">
            <img src={Star} alt="" className="icon-l mt-2" />
            <h3 className="mt-2">Os melhores e mais bem votados posts deste mês</h3>
            <p className="mt-2">
              Os posts mais votados, amados (e talvez um pouco odiados) pela galera nas últimas
              semanas. O mês foi movimentado e o feed entregou de tudo um pouco. Separamos aqui os
              conteúdos que a comunidade mais engajou, votou e levou para o topo. Pega a pipoca,
              confere o que tá bombando e diz aí se faltou algum favorito seu nessa lista.
            </p>
          </div>
          <div className="grid-6">
            <Main />
            <Main />
          </div>
        </div>
      </section>

      <section className="container">
        <h3>Posts com mais visitas</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dignissimos similique vitae
          quas modi libero, laboriosam mollitia numquam,
        </p>

        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <Banner />
    </>
  );
};

export default Home;
