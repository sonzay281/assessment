import { render, screen } from "@testing-library/react";
import { StyleProvider, ThemePicker } from "vcc-ui";

import ProductCard, { IProduct } from "../../src/components/ProductCard";

describe("Render Product Item", () => {
  const product: IProduct = {
    id: "xc90-recharge",
    modelName: "XC90 Recharge",
    bodyType: "suv",
    modelType: "plug-in hybrid",
    imageUrl: "/images/xc90_recharge.jpg",
  };

  it("generate url for learn more about the item ", () => {
    render(
      <StyleProvider>
        <ThemePicker variant="light">
          <ProductCard product={product} size={3} />
        </ThemePicker>
      </StyleProvider>
    );
    const title = screen.getByTitle(
      `Click to learn more about the ${product.modelName}`
    );
    expect(title).toBeInTheDocument();
  });

  it("generate url for shop concatinating item id", () => {
    render(
      <StyleProvider>
        <ThemePicker variant="light">
          <ProductCard product={product} size={3} />
        </ThemePicker>
      </StyleProvider>
    );
    const title = screen.getByTitle(`Click to buy the ${product.modelName}`);
    expect(title).toBeInTheDocument();
  });

  it("render modelName", () => {
    render(
      <StyleProvider>
        <ThemePicker variant="light">
          <ProductCard product={product} size={3} />
        </ThemePicker>
      </StyleProvider>
    );
    const title = screen.getByText(product.modelName);
    expect(title).toBeInTheDocument();
  });

  it("render modelType", () => {
    render(
      <StyleProvider>
        <ThemePicker variant="light">
          <ProductCard product={product} size={3} />
        </ThemePicker>
      </StyleProvider>
    );
    const title = screen.getByText(product.modelType);
    expect(title).toBeInTheDocument();
  });

  it("render bodyType", () => {
    render(
      <StyleProvider>
        <ThemePicker variant="light">
          <ProductCard product={product} size={3} />
        </ThemePicker>
      </StyleProvider>
    );
    const title = screen.getByText(product.bodyType);
    expect(title).toBeInTheDocument();
  });
});
