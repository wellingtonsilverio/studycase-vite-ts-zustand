import { render, screen } from '@testing-library/react';
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
});
