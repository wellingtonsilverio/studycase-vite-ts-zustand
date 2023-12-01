interface Props {
  amount: number;
  onChange: () => void;
}

const Paginate: React.FC<Props> = ({ amount, onChange }) => {
  return (
    <div>
      <span>{`<`}</span>
      <input defaultValue={amount} />
      <span>{`>`}</span>
    </div>
  );
};

export default Paginate;
