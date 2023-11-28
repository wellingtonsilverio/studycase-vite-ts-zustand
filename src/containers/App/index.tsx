import { useState } from 'react';

import './App.css';
import Button from '../../components/Button';
import { useCountState } from '../../hooks/store/count';

function App() {
  const count = useCountState(state => state.count);
  const addCount = useCountState(state => state.addCount);

  return (
    <>
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <Button onClick={addCount}>count is {count}</Button>
      </div>
    </>
  );
}

export default App;
