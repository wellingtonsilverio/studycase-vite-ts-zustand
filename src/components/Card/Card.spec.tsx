import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card Component', () => {
  it('should render card', () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });
  it('should has content into card', () => {
    render(<Card>Hi!</Card>);

    expect(screen.getByText('Hi!')).toBeInTheDocument();
  });
});
