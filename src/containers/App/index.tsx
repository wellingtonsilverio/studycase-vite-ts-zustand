import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import { useCountState } from '~/hooks/store/count';
import Todo from '~/containers/Todo';

import './App.css';

function App() {
  const navigate = useNavigate();

  const count = useCountState((state) => state.count);
  const addCount = useCountState((state) => state.addCount);

  const handleGoToReactQuery = () => {
    navigate('/rick');
  };

  return (
    <>
      <Button onClick={handleGoToReactQuery}>Fetch exemple with React Query</Button>
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <Button onClick={addCount}>count is {count}</Button>
      </div>
      <Todo />
    </>
  );
}

export default App;
