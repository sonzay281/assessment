import { render, screen } from "@testing-library/react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Home from "../../pages";

describe("Render Home", () => {
  it("renders a heading", () => {
    render(
      <StyleProvider>
        <ThemePicker variant="light">
          <Home />
        </ThemePicker>
      </StyleProvider>
    );

    const title = screen.getByText("Volvo Cars");
    expect(title).toBeInTheDocument();
  });
});
