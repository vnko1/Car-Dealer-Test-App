import React from "react";
import { Container } from "@/components";

const Loader: React.FC = () => {
  return (
    <Container tag="div" containerClassNames="flex justify-center">
      <p>Loading ...</p>
    </Container>
  );
};

export default Loader;
