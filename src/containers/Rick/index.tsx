import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import useFetchCaracters from '../../hooks/queries/character';

function Rick() {
  const navigate = useNavigate();

  const { data }= useFetchCaracters();

  console.log(data);

  const handleGoToTodo = () => {
    navigate("/");
  }

  return (
    <div>
      <Button onClick={handleGoToTodo}>Count and Todo exemple with Zustand</Button>
      <h1>Rick</h1>
    </div>
  );
}

export default Rick;
