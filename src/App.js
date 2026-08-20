import Header from './components/Header';
import Routes from './routes'
import { useEffect, useState, useCallback } from 'react';

function App() {
const [tarefas, setTarefas] = useState(() => {
  const tarefasSalvas = localStorage.getItem('Array de tarefas');

  return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
});

const [campo, setCampo] = useState('')

const AdicionarItem = useCallback(() => {
    setTarefas([...tarefas, campo])
    setCampo('');
}, [tarefas, campo]);

  


function handlecampo(e){
setCampo(e.target.value);

}
// funciona como um componentDidMount
// useEffect(() => {
// const tarefasStorage = localStorage.getItem('Array de tarefas');

// if(tarefasStorage){
//   setTarefas(JSON.parse(tarefasStorage));
// }
// }, [])

// funciona como um componentDidUpdate
useEffect(() => {
  localStorage.setItem('Array de tarefas', JSON.stringify(tarefas))
}, [tarefas])
  return (
 <>
      
     <Header />
    <Routes />
<div>
  <h1>Olá, vamos falar sobre useState</h1> <br/>

  <ul>
    {
      tarefas.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
  </ul>

  <input type='text' name='nome' value={campo} onChange={(e) => setCampo(e.target.value)}/>

    <button type='button' onClick={AdicionarItem}>adicionar</button>

</div>

 </>
  );
}

export default App;
