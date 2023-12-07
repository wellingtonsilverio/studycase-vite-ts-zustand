import React, { useState } from 'react';
import Button from '~/components/Button';

import './Paginate.css';

interface Props {
  amount: number;
  onChange: (page: number) => void;
}

const DEFAULT_INIT_PAGE = 1;

const Paginate: React.FC<Props> = ({ amount, onChange }) => {
  const [page, setPage] = useState(DEFAULT_INIT_PAGE);
  function handleReturnPage() {
    if (page - 1 < DEFAULT_INIT_PAGE) return;
    setPage((_page) => _page - 1);
    onChange(page - 1);
  }
  function handleForwardPage() {
    if (page + 1 > amount) return;
    setPage((_page) => _page + 1);
    onChange(page + 1);
  }
  function handleChangeInput(element: any) {
    const value = Number(element.target.value);
    if (value > amount || value < DEFAULT_INIT_PAGE) return;
    setPage(value);
    onChange(value);
  }
  return (
    <div className="Paginate">
      <Button onClick={handleReturnPage} disabled={page - 1 < DEFAULT_INIT_PAGE}>{`<`}</Button>
      <input defaultValue={DEFAULT_INIT_PAGE} onChange={handleChangeInput} value={page} />
      <Button onClick={handleForwardPage} disabled={page + 1 > amount}>{`>`}</Button>
    </div>
  );
};

export default Paginate;
