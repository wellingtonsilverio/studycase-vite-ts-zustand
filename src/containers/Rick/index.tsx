import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import Paginate from '~/components/Paginate';
import { useState } from 'react';
import Character from '~/components/Caracters';
import useFetchCharacter from '~/hooks/queries/character';

import './Rick.css';

function Rick() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data } = useFetchCharacter(1);

  const handleGoToTodo = () => {
    navigate('/');
  };

  function handleChangePaginate(page: number) {
    setPage(page);
  }

  return (
    <div>
      <Button onClick={handleGoToTodo}>Count and Todo exemple with Zustand</Button>
      <h1>Rick</h1>
      <Character page={page} />
      <Paginate amount={data?.info.pages} onChange={handleChangePaginate} />
    </div>
  );
}

export default Rick;
