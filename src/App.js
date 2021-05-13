import react, { useState } from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';



function App() {
  const [keyword, setKeyword ] = useState('panda')
  return (
    <div className="App">
      <section>
        <button onClick={() => setKeyword('mapache')}>Cambiar keyword</button>
        <ListOfGifs keyword={keyword}/>
      </section>
    </div>
  );
}

export default App;
