import { render } from '@testing-library/react';
import Todo from './';

describe('Todo Container', () => {
  it('should render Todo', () => {
    const { container } = render(<Todo />);

    expect(container).toMatchSnapshot();
  });
});
