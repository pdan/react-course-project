import React, { useEffect, useContext, createContext, useReducer } from 'react';
import './App.css'

type TContext = {
  count: number
}

type TAction = {
  type: string
}

const CountContext = createContext<TContext>({ count: 0 })

const countReducer = (state: TContext, action: TAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const { count } = useContext(CountContext)
  const [state, dispatch] = useReducer(countReducer, { count: 0 })



  return (
    <CountContext.Provider value={ state }>
      <div className='container'>
        <div className='counter'>{count}</div>
        <div className="control">
          <button className='button decrement-button' onClick={() => dispatch({type: 'decrement'})}>
            Decrement
          </button>
          <button className='button increment-button' onClick={() => dispatch({type: 'increment'})}>
            Increment
          </button>
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
