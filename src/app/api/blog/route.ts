// in Nextjs, the type of the request object is 'NextRequest'. It provides convenient methods for managing query parameters with ease for example.
import { NextRequest } from "next/server";

// define and export async function that corresponds to the GET HTTP request
// every route handler function receives the 'request' object as an argument when a client sends an HTTP request to an API route
// to handle query parameters, you need the given 'request' object as an argument
export const GET = async (_request: NextRequest) => {
  try {
    // create a GET HTTP request to the speficified URL using the Fetch API
    // by default, fetched data is automatically cached by Next.js (improves performance and reduces costs) - this will change in Next.js 15
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      // opt out of caching the fetched data by setting the 'cache' option to "no-store" inside the request object
      // cache: "no-store",

      next: {
        // revalidate the static page in the background every hour.
        // after the 1-hour period expires, the next request will trigger a revalidation. The stale page is still served to the user while the revalidation occurs in the background.
        // once the page is revalidated and regenerated, the new version replaces the old one in the cache. Subsequent requests after this revalidation will receive the updated page.
        revalidate: 3600,
      },
    });

    // handles HTTP errors that the Fetch API itself does not treat as errors
    if (!res.ok) {
      // throw new error to catch block with a message indicating the HTTP status
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // parse the response body from the fetch request as JSON
    const posts = await res.json();

    // create and return to the client an HTTP response object with the body containing the fetched and parsed data (200 status)
    return Response.json(posts);
  } catch (err) {
    // handle both network errors and HTTP errors
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("An unknown error occured");
    }
  }
};
