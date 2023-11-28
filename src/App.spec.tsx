import { render } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  it("should screen", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  })
})