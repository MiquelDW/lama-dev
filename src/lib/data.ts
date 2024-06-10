// TEMPORARY DATA
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "......", userId: 1 },
  { id: 2, title: "Post 2", body: "......", userId: 1 },
  { id: 3, title: "Post 3", body: "......", userId: 2 },
  { id: 4, title: "Post 4", body: "......", userId: 2 },
];

export const getPosts = (id: number) => {
  // return all posts
  return posts;
};

export const getPost = (id: number) => {
  // find the first post whose id matches the given arg 'id'
  // return the first post object that returns true inside the callback function
  return posts.find((post) => post.id === id);
};

export const getUser = (id: number) => {
  // find the first users whose id matches the given arg 'id'
  // return the first users object that returns true inside the callback function
  return users.find((user) => user.id === id);
};
