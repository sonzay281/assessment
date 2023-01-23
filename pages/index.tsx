import React from "react";
import { Block, Logo, Text } from "vcc-ui";

import ProductContainer from "../src/components/ProductContainer";

const Home: React.FC = () => (
  <main>
    <section>
      <Text extend={{ textAlign: "center" }} variant="yang" role="heading">
        Volvo Cars
      </Text>
      <ProductContainer />
    </section>
  </main>
);

export default Home;
