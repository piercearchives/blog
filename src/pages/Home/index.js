// components

import Hero from './Hero';
import Banner from './Banner';
import Card from './Card';
import Main from './Main';

// figuras
import Star from '../../svg/icon-star.svg';

// api
import api from 'services/api';

// hooks
import { useState, useEffect } from 'react';

const Home = () => {
  // variáveis de estado
  const [main, setMain] = useState([]);
  const [mostseen, setMostseen] = useState([]);
  const [banner, setBanner] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // requisição para posts com 5 de avaliação
    api.get('/posts?star=5&_limit=2&_order=desc').then(r => {
      setMain(r.data);
    });

    // requisição para banner
    api.get('/posts?_start=4&_sort=date&_order=desc&_limit=1').then(r => {
      setBanner(r.data);
    });

    // posts mais vistos
    api.get('/posts?_start=2&_limit=5').then(r => {
      setMostseen(r.data);
    });
  }, []);

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
            {main.map(item => {
              return <Main key={item.id} content={item} />;
            })}
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

          {
            mostseen.map((item) => {
              return <Card key={item.id} content={item} />
            })
          }



        </div>
      </section>

  {
            banner.map((item) => {
              return <Banner key={item.id} content={item} />
            })
          }

    </>
  );
};

export default Home;
