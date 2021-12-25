import React, { LegacyRef, MutableRefObject, Ref, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item'
import { Button } from 'antd';
import { ButtonHTMLType } from 'antd/lib/button/button';
import { FormInstance } from 'rc-field-form';

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

interface UserSignin {
  username: string
  password: string
}

function App() {
  const form = React.createRef<HTMLFormElement>()


  const signin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(
      e.currentTarget.username.value,
      e.currentTarget.password.value
    )
  }


  return (
    <div className="app">
      <form style={{ display: 'flex', flexDirection: 'column' }} ref={form} onSubmit={signin}>
        <input name="username" placeholder='username' />
        <input name="password" type="password" placeholder='password' />

        <button type={'submit'}>Submit</button>
      </form>
    </div>
  );
}

export default App;
