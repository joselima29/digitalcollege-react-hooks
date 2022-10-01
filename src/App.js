import './App.css';
import { useState, useEffect } from 'react';

const Title = ({ children, counter }) => {

  return (
    <>
    <h6>{children} / {counter}</h6>
    </>
  )
}

const App = () => {
  const [ title, setTitle] = useState('Aula useState')
  const [ counter, setCounter] = useState(0)

  useEffect(() => {
    if(counter >= 3){
      setTitle('Aula Encerrada')
    }
  }, 
  [counter])

  useEffect(() => {
    setCounter(0)
  }, [title])

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const changeTitle = () => {
    setTitle('Aula completa')
  }

  return (
    <div>
      <Title counter={counter}>{title}</Title>
      <h6 >{title}</h6>
      <button onClick={changeTitle}>Titlu</button>
      <button onClick={handleClick}>Butaum</button>
      <p>
        {counter}
      </p>
    </div>
  );
}

export default App;
