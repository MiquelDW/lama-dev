// navigate users to the specified routes within the application without a full page reload
import Link from "next/link";

// Root NotFound Component wraps around all route files inside the application (after Root Layout Component)
// it allows you to render and display a customized Not Found page to users for 404 errors when a specific page / route inside the wrapper is not found
const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Could not find requested resource</p>
      {/* navigate user to the Home page */}
      <Link href="/">Return to Homepage</Link>
    </div>
  );
};

export default NotFound;
