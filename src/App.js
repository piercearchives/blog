import Header from './components/Header';
import Article from './components/Article';
import {useState} from 'react';

function App() {

  
  let  [carrinho, setCarrinho]= useState(0);




  function AddItem(){
    setCarrinho(carrinho + 1);
    console.log(carrinho);
  }

  function RemoveItem(){
    if(carrinho > 0){
      setCarrinho(carrinho - 1)
    }
    console.log(carrinho);
  }

  return (
 <>
      
     <Header />
      <Article />
      <h1>carrinho de compras: {carrinho}</h1>
       <div className='flex'>
         <button className='add-button ml-2' onClick={AddItem}>+</button>
            <button className='remove-button ml-2' onClick={RemoveItem}>-</button>
       </div>
 </>
  );
}

export default App;
