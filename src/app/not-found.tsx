import Link from "next/link";
import { Container } from "@/components";

export default function NotFound() {
  return (
    <Container
      tag="section"
      containerClassNames="flex flex-col gap-3-xs justify-center items-center"
    >
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
