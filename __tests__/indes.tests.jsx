import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText(/header/i);

    expect(heading).toBeInTheDocument();
  });

  it("snapshot", () => {
    const home = render(<Home />);

    expect(home).toMatchSnapshot();
  });
});
