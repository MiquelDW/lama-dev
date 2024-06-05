import { ReactNode } from "react";

// layout component wraps around the route files inside the folder 'blog'
// this layout component applies to all route files within 'app/blog/...'
// it ensures a consistent layout for all routes within the folder 'blog'
const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <h2>This is the Blog Layout</h2> */}

      {/* components passed to the Blog Layout */}
      {children}
    </div>
  );
};

export default BlogLayout;
