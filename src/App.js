import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login } from './actions'

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">

        <h1>Counter : {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <button onClick={() => dispatch(login())}>
          {
            isLogged
              ? 'Sign out'
              : 'Sign in'
          }
        </button>

        {
          isLogged
            ? <h3>Wellcome back, do you want to sign out ?</h3>
            : <h3>You need to sign in first!</h3>
        }

        Learn Redux

      </header>
    </div>
  );
}

export default App;
