// header e footer
import Header from 'pages/Header';
import Footer from 'pages/Footer';


// card
import Card from 'pages/Home/Card';

// Parâmetros de URL
import { useParams } from 'react-router-dom';

// hooks

import { useState, useEffect } from 'react';

// api 

import api from 'services/api';


const Search = () => {

const {word_search} = useParams();

// variáveis de estado
const [word, setWord] = useState(word_search);
const [search, setSearch] = useState([]);
const [form, setForm] = useState([]);

useEffect(() => {
if(word){
api.get(`/posts?q=${word}`)
.then((response) => {
  setSearch(response.data);
})
};

}, [word])

function onChange(event) {
    // desestruturação do valor e propriedade do campo
    const { value, name } = event.target;

    // pegando o valor antigo e adicionando o caracter novo
    setForm({ ...form, [name]: value });

    // console.log(form);
  }

function handleSearch(e) {
    e.preventDefault();

    setWord(form.search)
  }

  return (
    <>
      <Header />

        <section className="container">

      <h6 className='uppercase color-primary text-center'>{search.length} resultados</h6>
<h4 className='text-center'>{word}</h4>

<form onSubmit={handleSearch}>
  <div className='row'>
    <div className='grid-2 disappear'> </div>
    <div className='grid-8 flex-center'> 
      <input type='text' name='search' placeholder='Buscar...' onChange={onChange} />
      <button className='btn ml-2'> Buscar </button>
    </div>
        <div className='grid-2 disappear'> </div>
  </div>
</form>
        <h3>Pesquisa</h3>
       

        <div className="row cards-list">

          {
            search.map((item) => {
              return <Card key={item.id} content={item} />
            })
          }



        </div>
      </section>

      <Footer />
    </>
  );
};

export default Search;
