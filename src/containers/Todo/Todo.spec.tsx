import recoilRender from "../../utils/jest/recoilRender"
import Todo from './';

describe('Todo Container', () => {
  it('should render Todo', () => {
    const { container } = recoilRender(<Todo />);

    expect(container).toMatchSnapshot();
  });
});
