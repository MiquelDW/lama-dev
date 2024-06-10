// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rerendering and event handling, providing a responsive and interactive user experience
"use client";

// navigate users to the specified routes within the application without a full page reload
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router"; // older version

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  // instantiate 'router' object with the 'useRouter' hook
  const router = useRouter();
  // retrieve current pathname with the 'usePathname' hook
  const pathname = usePathname();
  console.log(pathname);
  // read the query parameters inside the current URL with 'useSearchParams' hook
  const searchParams = useSearchParams();
  // retrieve the value of query paremeter "q"
  const q = searchParams.get("q");
  console.log(q);

  // callback function to handle onClick event
  const handleClick = () => {
    console.log("clicked");
    // programmatically redirect user to given route with 'router' object
    router.push("/");

    // 'replace' prop replaces the current entry in the history stack instead of adding a new one ['/' > 'navigationtest > '/'] becomes ['/' > '/']
    // router.replace("/");

    // refresh the current route and make a new page request to the server
    // router.refresh();

    // navigate user to the next route
    // router.forward();
    // navigate user to the previous route
    // router.back();
  };

  return (
    <div>
      {/* navigate user to the specified routes */}
      {/* part of the default behaviour of a Link component in Next.js is the prefetching of a given route if its corresponding Link component is within the viewport. This improves navigation performance by reducing the load time when the user clicks on the link */}
      {/* if you have many links, you might want to disable this prefetching because it might cause some performance issues */}
      <Link href="/" prefetch={false}>
        Click Me
      </Link>

      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
