"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

    useEffect(() => {
        console.error(error);
        // Optionally, you can redirect to a custom error page
        // router.push('/error');
    }, [error, router]);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}