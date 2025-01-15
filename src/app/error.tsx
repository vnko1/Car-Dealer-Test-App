"use client";

import { useEffect } from "react";
import { Container } from "@/components";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container containerClassNames="flex flex-col gap-3-xs justify-center items-center">
      <h1>Something went wrong!</h1>
      <button className="button" onClick={() => reset()}>
        Try again
      </button>
    </Container>
  );
}
