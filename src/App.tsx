import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item'
import { Button } from 'antd';

const data = [
  {
    name: 'Atieh', description: 'A blog post',
    time: 'Today at 5:00', image: '/assets/images/02.png'
  },

  {
    name: 'Parisa', description: 'Hello world',
    time: 'Today at 5:00', image: '/assets/images/03.png'
  },

  {
    name: 'Sina', description: 'A Linux blog',
    time: 'Today at 5:00', image: '/assets/images/01.png'
  }
]

function App() {
  const [state, setState] = useState<number>(1)
  const [secondState, setSecondState] = useState<number>(1)
  const [thirdState, setThirdState] = useState<{ a: number, b: number }>({
    a: 1,
    b: 100
  })

  useEffect(() => {
    console.log('Change')
  }, [state, secondState])


  const counter1 = () => {

    setState(state + 1);
  }

  const counter2 = () => {

    setSecondState(secondState + 1)
  }

  return (
    <div className="app">
      <a onClick={counter1}>Click to count 1</a>
      <a onClick={counter2}>Click to count 2</a>
      <h1 className="timer">{state} {secondState} </h1>
      {
        data.map((data, index) =>
          <Item {...data} key={index} />
        )
      }
    </div>
  );
}

export default App;
