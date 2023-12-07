import useFetchCharacter from '~/hooks/queries/character';
import Card from '../Card';

import './Characters.css';

interface Props {
  page: number;
}

const Character: React.FC<Props> = ({ page }) => {
  const { data } = useFetchCharacter(page);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="Characters">
      {data?.results.map((caracter: any) => (
        <Card
          key={caracter.name}
          image={caracter.image}
          name={caracter.name}
          tags={[caracter.gender, caracter.species, caracter.status]}
        />
      ))}
    </div>
  );
};

export default Character;
