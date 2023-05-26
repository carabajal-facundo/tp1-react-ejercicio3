import Titulo from './components/Titulo';
import './App.css'
import { useState } from 'react';

function App() {
  const [mjs, setMjs] = useState('');

  return (
    <>
      <Titulo tituloAmigo='mi amigo' estadoMjs={mjs}/>
      <button onClick={()=>{setMjs('(from changed state)')}}>Has clik aqui!!</button>
    </>
  )
}

export default App
