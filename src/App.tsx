import React from 'react';
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
  return (
    <div className="app">
      {
        data.map((data, index) =>
          <Item {...data} key={index} />
        )
      }
    </div>
  );
}

export default App;
