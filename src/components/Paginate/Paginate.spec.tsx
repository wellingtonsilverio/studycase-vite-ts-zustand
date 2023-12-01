import { fireEvent, render, screen } from '@testing-library/react';
import Paginate from '.';

describe('Paginate Component', () => {
  it('should render component', () => {
    const { container } = render(<Paginate amount={1} onChange={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('should show button to back page', () => {
    const amount = 2;
    render(<Paginate amount={amount} onChange={() => {}} />);

    expect(screen.getByText(`<`)).toBeInTheDocument();
  });

  it('should show ellipsis foward button', () => {
    const amount = 7;
    render(<Paginate amount={amount} onChange={() => {}} />);

    expect(screen.getByText(`>`)).toBeInTheDocument();
  });

  it('should change page after change input', () => {
    const amount = 7;
    render(<Paginate amount={amount} onChange={() => {}} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '7' } });

    expect(screen.getByRole('textbox')).toHaveValue('7');
  });

  it('should call onChange after change', () => {
    const amount = 7;
    const fakeFunction = jest.fn();
    render(<Paginate amount={amount} onChange={fakeFunction} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '7' } });

    expect(fakeFunction).toHaveBeenCalled();
  });
});
