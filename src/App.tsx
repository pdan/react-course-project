import { useContext, createContext, useReducer, useMemo } from 'react';
import './App.css'

type TState = {
  count: number
}
type TAction = {
  type: string
}

type TDispatch = (action: TAction) => void

type TContext = {
  state: TState
  dispatch: TDispatch
}

const CountContext = createContext<TContext>({ state: { count: 0 }, dispatch: () => undefined })

const countReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Controls() {
  const context = useContext(CountContext)

  return (
    <>
      <div className='counter'>{context.state.count}</div>
      <div className="control">
        <button className='button decrement-button' onClick={() => context.dispatch({ type: 'decrement' })}>
          Decrement
        </button>
        <button className='button increment-button' onClick={() => context.dispatch({ type: 'increment' })}>
          Increment
        </button>
      </div>
    </>
  )
}

function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  const contextValue = useMemo(() => {
    return {state, dispatch}
  }, [state, dispatch])

  return (
    <CountContext.Provider value={contextValue}>
      <div className='container'>
        <Controls />
      </div>
    </CountContext.Provider>
  );
}

export default App;
