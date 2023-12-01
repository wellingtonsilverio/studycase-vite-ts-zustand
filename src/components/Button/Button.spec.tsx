import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
  it('should render button', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
  it('should render text inside component', () => {
    render(<Button>Hi!</Button>);

    expect(screen.getByText('Hi!')).toBeInTheDocument();
  });
  it('should call onClick', () => {
    const fakeFunction = jest.fn();
    render(<Button onClick={fakeFunction}>Hi!</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(fakeFunction).toHaveBeenCalled();
  });
  it('should disabled not onClick', () => {
    const fakeFunction = jest.fn();
    render(
      <Button onClick={fakeFunction} disabled={true}>
        Hi!
      </Button>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(fakeFunction).toHaveBeenCalledTimes(0);
  });
});
