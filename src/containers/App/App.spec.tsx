import { render } from '@testing-library/react';
import App from '.';

describe('App', () => {
  it('should screen', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
