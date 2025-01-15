import { Container } from "@/components";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Container tag="footer" containerClassNames="flex justify-center">
      <p>
        &#169;{" "}
        {new Date().toLocaleDateString(undefined, {
          year: "numeric",
        })}
      </p>
    </Container>
  );
};

export default Footer;
