import React from "react";
import Link from "next/link";
import { Container } from "@/components";

const Header: React.FC = () => {
  return (
    <Container tag="header" containerClassNames="flex justify-between">
      <Link href="/" className="link text-h3_lg">
        Car Dealer
      </Link>
    </Container>
  );
};

export default Header;
