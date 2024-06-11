// if every function inside this module is a Server Component (which it is in this case), then you can just indicate that the file or module should be treated as a Server Component
"use server";

// Server Action function that will run on the server
// Server Action functions need to be asynchronous functions
// Server Action function takes given form data / user input as a prop
export const addPost = async (formData: FormData) => {
  // indicate that this function should be treated as a Server Component
  // "use server";

  // retrieve values from the given input fields (user cdata)
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  // retrieve values from the given input fields (user data)
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  console.log(title, desc, slug);
  console.log(formData);

  try {
    // add new post to database (Server Side Action)
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("An unknown error occured");
    }
  }
};

// Server Action function that will run on the server
// Server Action function takes given form data / user input as a prop
export const deletePost = async (formData: FormData) => {
  // indicate that this function should be treated as a Server Component
  // "use server";

  // retrieve 'id' of the post that you want to delete
  const { id } = Object.fromEntries(formData);

  // code to delete post in database (Server Side Action)
};
