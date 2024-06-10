type UserData = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// GET request handler function
const getData = async (userId: string) => {
  try {
    // create a GET HTTP request to the speficified URL using the Fetch API
    // by default, fetched data is automatically cached by Next.js (improves performance and reduces costs) - this will change in Next.js 15
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        // opt out of caching the fetched data by setting the 'cache' option to "no-store" inside the request object
        cache: "no-store",
      },
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

// destructure 'id' from the given 'props' object
const PostUser = async ({ userId }: { userId: string }) => {
  // fetch data from the specified URL / API
  const user: UserData = await getData(userId);
  // console.log(user);

  return (
    <div className="flex flex-col gap-[10px]">
      <span className="font-bold text-gray-500">Author</span>
      <span className="font-medium">{user.name}</span>
    </div>
  );
};

export default PostUser;
