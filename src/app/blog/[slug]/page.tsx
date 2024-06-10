import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";

// GET request handler function
const getData = async (slug: string) => {
  try {
    // create a GET HTTP request to the speficified URL using the Fetch API
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`,
    );

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

type SinglePostPageProps = {
  // contains route parameters of the current URL (names must match!!)
  params: { slug: string };
  // contains query parameters of the current URL
  searchParams: ReadonlyURLSearchParams;
};

// dynamic page for each blog post from whatever user
// destructure 'params' and 'searchParams' from given 'props' object
const SinglePostPage = async ({
  params,
  searchParams,
}: SinglePostPageProps) => {
  console.log(params, searchParams);

  // destructure route parameter 'slug' from the given 'params' prop
  const { slug } = params;
  console.log(slug);
  // fetch data from the specified URL / API
  const post = await getData(slug);
  console.log(post);

  return (
    // Page container
    <div className="pageContainer">
      {/* Left section */}
      <div className="imgContainer h-[calc(100vh-200px)] mmd:hidden">
        {/* blog photo */}
        <Image
          src="https://images.pexels.com/photos/20157706/pexels-photo-20157706/free-photo-of-tram-on-street-by-estrela-basilica-in-lisbon-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Blog Photo"
          fill
          className="object-cover"
        />
      </div>

      {/* Right section */}
      <div className="flex flex-[2] flex-col gap-[50px]">
        {/* blog title */}
        <h1 className="text-[64px]">{post?.title}</h1>

        {/* blog information */}
        <div className="flex gap-[20px]">
          {/* user profile picture */}
          <Image
            src="/noavatar.png"
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-[50%] object-cover"
          />

          {/* author's name */}
          {/* it's good practice to show loading indicator here when user data is fetching after the post data has been fetched */}
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          {/* blog post release date */}
          <div className="flex flex-col gap-[10px]">
            <span className="font-bold text-gray-500">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>
        </div>

        {/* blog description */}
        <div className="text-[20px]">{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
