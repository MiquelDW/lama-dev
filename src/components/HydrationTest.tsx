// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rerendering and event handling, providing a responsive and interactive user experience
"use client";
import { useEffect, useState } from "react";

const HydrationTest = () => {
  const [isClient, setIsClient] = useState(false);

  // No problem
  // Component on the Server Side is NOT the same as the Component on the Client Side
  // const a = 1;
  // console.log(a);

  // Problem
  // You will encounter a problem, because the variable 'b' will produce different results on the Server and Client Side
  const b = Math.floor(Math.random() * 10);
  console.log(b);

  // Hydration Error Solution #1: use the useEffect hook to ensure that certain parts of your component only run client side, thereby avoiding differences between the initial server-rendered and client-rendered HTML
  useEffect(() => {
    // code that only runs on the client-side
    // prevents mismatches between server-rendered and client-rendered HTML
    setIsClient(true);
  }, []);

  return (
    <div>
      {/* showcase Hydration Error */}
      {/* Text content did not match. Server: "..." Client: "..." */}
      {/* Text content does not match server-rendered HTML. */}
      {/* There was an error while hydrating this Suspense boundary. Switched to client rendering. */}
      {b}
      {/* this is fine because the structure of the initial server-rendered HTML matches the initial client-rendered HTML*/}
      {/* {isClient && b} */}
    </div>
  );
};

export default HydrationTest;
