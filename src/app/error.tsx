// error components must be a client component. Indicate that this file or module should be treated as a Client Component
"use client";

// Root Error Component wraps around all route files inside the application (after Root Layout Component)
// it allows you to render and display a customized error page to users if a specific page / route inside the wrapper throws an error
const Error = () => {
  return <div>Error</div>;
};

export default Error;
