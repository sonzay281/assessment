import { render } from "@testing-library/react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import Home from "../../pages";

it("renders homepage unchanged", () => {
  const { container } = render(
    <StyleProvider>
      <ThemePicker variant="light">
        <Home />
      </ThemePicker>
    </StyleProvider>
  );
  expect(container).toMatchSnapshot();
});
