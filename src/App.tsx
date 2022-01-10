import React, { LegacyRef, MutableRefObject, Ref, useEffect, useRef, useState, useContext, createContext, useReducer } from 'react';
import { Form, Input, Button, Select } from 'antd';
import logo from './logo.svg';
import { ColumnsType } from 'antd/lib/table/Table'
import './App.css';
import { Server } from 'http';
import axios from 'axios'
import Item from './Item'


const UserContext = createContext({})

interface Props {
  user:string
}

function Component1() {
  const [user, setUser] = useState<string>('Rasad User')

  // const [state, dispatch] = useReducer((state, action) => {
  //   switch (action) {
  //     case 'plus': 
  //       return state + 1;
  //     case 'cross': 
  //       return state * 5;

  //   }
  // }, {})

  // dispatch('plus')

  
  return (
    <UserContext.Provider value={user}>
      <h1>Component 1</h1>
      
      <Component2 />
    </UserContext.Provider>
  ) 
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3  />
    </>
  ) 
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4  />
    </>
  ) 
}

function Component4() {
  const user = useContext(UserContext)

  return (
    <>
      <h1>Component 4</h1>
      <Component5  />
    </>
  ) 
}

function Component5() {
  const user = useContext(UserContext)
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  ) 
}

function App() {


  return (
    <Component1 />
    
  );
}

export default App;
