import React from "react";
import Image from "next/image";
import { Flex, Link, Text, View } from "vcc-ui";

export interface IProduct {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const ProductCard = ({
  product: { modelName, bodyType, modelType, imageUrl, id },
  size = 3,
}: {
  product: IProduct;
  size?: number;
}) => (
  <View
    className="product-card"
    extend={{
      flexBasis: "80%",
      fromL: {
        flexBasis: `${(100 / 12) * size}%`,
      },
    }}
    padding={1}
    margin={0.5}
    id={`card-${id}`}
  >
    <Flex className="product-detail">
      <Text
        className="body-type"
        subStyle="emphasis"
        foreground="foreground.secondary"
        extend={{ textTransform: "uppercase" }}
        aria-label={`Body type:${bodyType}`}
      >
        {bodyType}
      </Text>
      <Flex
        className="name"
        extend={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          onlyS: {
            flexDirection: "column",
            alignItems: "flex-start",
          },
        }}
      >
        <Text
          className="name-model"
          subStyle="emphasis"
          variant="columbus"
          aria-label={`Model Name:${modelName}`}
        >
          {modelName}
        </Text>
        <Text
          className="name-model-type"
          foreground={"foreground.secondary"}
          subStyle="standard"
          variant="columbus"
          aria-label={`Model type:${modelType}`}
        >
          {modelType}
        </Text>
      </Flex>
    </Flex>
    <Flex className="product-image-container" extend={{ padding: "1rem 0" }}>
      <Image
        src={imageUrl}
        alt={modelName}
        height={400}
        width={600}
        loading="lazy"
        title={`Image: ${modelName}`}
        style={{ width: "100%", height: "100%" }}
      />
    </Flex>
    <Flex
      extend={{ flexDirection: "row", justifyContent: "space-evenly" }}
      className="product-actions"
    >
      <Link
        arrow={"right"}
        className="font-medium"
        href={`/learn/${id}`}
        title={`Click to learn more about the ${modelName}`}
      >
        Learn
      </Link>

      <Link
        arrow={"right"}
        href={`/shop/${id}`}
        title={`Click to buy the ${modelName}`}
      >
        Buy
      </Link>
    </Flex>
  </View>
);

export default ProductCard;
