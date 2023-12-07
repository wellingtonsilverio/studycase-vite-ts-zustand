import './Card.css';

interface Props {
  image: string;
  name: string;
  tags: string[];
}

const Card: React.FC<Props> = ({ image, name, tags }) => {
  return (
    <div className="Card">
      <img src={image} />
      <div className="content">
        <h2>{name}</h2>
        <div className="tags">{tags?.map((tag) => <span>#{tag.substring(0, 12)}</span>)}</div>
      </div>
    </div>
  );
};

export default Card;
