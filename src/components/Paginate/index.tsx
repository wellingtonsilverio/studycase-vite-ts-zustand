import { useState } from 'react';
import Button from '~/components/Button';

interface Props {
  amount: number;
  onChange: () => void;
}

const DEFAULT_INIT_PAGE = 1;

const Paginate: React.FC<Props> = ({ amount, onChange }) => {
  const [page, setPage] = useState(DEFAULT_INIT_PAGE);
  function handleReturnPage() {
    if (page - 1 < DEFAULT_INIT_PAGE) return;
    setPage((_page) => _page - 1);
  }
  function handleForwardPage() {
    if (page + 1 > amount) return;
    setPage((_page) => _page + 1);
  }
  return (
    <div>
      <Button onClick={handleReturnPage} disabled={page - 1 < DEFAULT_INIT_PAGE}>{`<`}</Button>
      <input defaultValue={DEFAULT_INIT_PAGE} onChange={onChange} />
      <Button onClick={handleForwardPage} disabled={page + 1 > amount}>{`>`}</Button>
    </div>
  );
};

export default Paginate;
