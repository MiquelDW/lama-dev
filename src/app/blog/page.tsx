import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

// predefine object structure for each post
export type PostData = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

// GET request handler function
const getData = async () => {
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
    // return the fetched and parsed data
    return posts;
  } catch (err) {
    if (err instanceof Error) {
      // handle both network errors and HTTP errors
      console.log(err.message);
    } else {
      console.log("An unknown error occured");
    }
  }
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // fetch data from the specified URL / API
  const posts = await getData();
  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();
  return (
    <div className="flex flex-wrap gap-[20px]">
      {/* create seperate function component instance for each post */}
      {posts.map((post: PostData) => (
        <div className="w-[30%] mxl:w-[45%] mmd:w-full" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
