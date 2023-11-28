import Button from '../../components/Button';
import { useCountState } from '../../hooks/store/count';
import Todo from '../Todo';

import './App.css';

function App() {
  const count = useCountState(state => state.count);
  const addCount = useCountState(state => state.addCount);

  return (
    <>
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <Button onClick={addCount}>count is {count}</Button>
      </div>
      <Todo />
    </>
  );
}

export default App;
