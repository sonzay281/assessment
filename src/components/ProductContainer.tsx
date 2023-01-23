import React, { useEffect, useRef, useState } from "react";
import { Flex, IconButton, View } from "vcc-ui";

import SlideMask from "./SlideMask";
import FilterWrapper from "./FilterWrapper";
import ProductCard, { IProduct } from "./ProductCard";

export interface IPageData {
  activeIndex: number;
  filter: undefined | string;
  bodyTypes: Array<string>;
}

const ProductContainer: React.FC = () => {
  const [products, setProducts] = useState([]);

  const [pageData, setPageData] = useState<IPageData>({
    activeIndex: 0,
    filter: undefined,
    bodyTypes: [],
  });

  const productsRef: React.RefObject<HTMLDivElement> = useRef(null);

  /**
   * Fetch products from API and store in state
   */
  const fetchProducts = async () => {
    const response = await fetch("/api/cars.json");
    if (response.ok) {
      const productList = await response.json();
      setProducts(productList);
      setPageData({
        ...pageData,
        bodyTypes: [
          ...new Set<string>(
            productList?.map(({ bodyType }: IProduct) => bodyType)
          ),
        ],
      });
    }
  };

  /**
   * Triggers on component did mount
   */
  useEffect(() => {
    fetchProducts();
  }, []);

  //handle page jump in mobile device when user clicks on any dot
  /**
   * Handle slide change events from different places
   * @param index index to jump on specific slide
   */
  const handleJump = (index: number) => {
    const productsElement = productsRef.current;
    if (productsElement) {
      const childElement = productsElement.childNodes.item(
        index
      ) as HTMLElement;
      childElement.scrollIntoView({ behavior: "smooth" });
      setPageData({ ...pageData, activeIndex: index });
    }
  };

  /**
   * Handle any slide events made from different places ans update slides
   * @param direction in which direction to slide
   */
  const handleSlide = (direction: "left" | "right") => {
    const activeIndex = pageData.activeIndex;
    const productsElement = productsRef.current;

    if (productsElement) {
      const childrenCount = productsElement?.childElementCount;

      const singleElementWidth = productsElement?.scrollWidth / childrenCount;

      let scrollLeft = productsElement?.scrollLeft || 0;

      if (direction == "left") {
        scrollLeft -= singleElementWidth;
        setPageData({
          ...pageData,
          activeIndex: activeIndex - 1 > 0 ? activeIndex - 1 : 0,
        });
      } else {
        scrollLeft += singleElementWidth;
        setPageData({
          ...pageData,
          activeIndex:
            activeIndex + 1 < childrenCount ? activeIndex + 1 : activeIndex,
        });
      }

      productsElement.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  /**
   *  Filter products
   */
  const productList = !!pageData.filter
    ? products.filter(({ bodyType }) => bodyType === pageData.filter)
    : products;

  return (
    <View className="products-container" padding={1}>
      <FilterWrapper setPageData={setPageData} pageData={pageData} />

      <SlideMask handleSlide={handleSlide} />

      <View className="products" ref={productsRef} as="div">
        {productList?.map((product: IProduct, index: number) => (
          <ProductCard key={`product-${index}`} product={product} size={3} />
        ))}
      </View>

      <Flex className="dots">
        {productList?.map((item: IProduct, index: number) => (
          <div
            className={pageData.activeIndex == index ? "active" : undefined}
            key={item.id}
            onClick={() => handleJump(index)}
          />
        ))}
      </Flex>

      <Flex className="scroller">
        <IconButton
          variant="outline"
          aria-label="Slide Left"
          iconName="navigation-chevronback"
          onClick={(_) => handleSlide("left")}
        />

        <IconButton
          variant="outline"
          aria-label="Slide Right"
          iconName="navigation-chevronforward"
          onClick={(_) => handleSlide("right")}
        />
      </Flex>
    </View>
  );
};

export default ProductContainer;
