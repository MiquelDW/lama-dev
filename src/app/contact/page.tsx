// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rerendering and event handling, providing a responsive and interactive user experience
"use client";

// Next.js recommends using the '<Image />' component instead of the regular '<img>' HTML element to automatically optimize images, potentially improving LCP (Largest Contentful Paint) and overall page performance
import dynamic from "next/dynamic";
import Image from "next/image";

// Hydration Error Solution #2: you can also prevent Hydration Errors by disabling SSR on specific components
// use the dynamic import to dynamically import component 'HydrationTest' without SSR (Server Side Rendering)
// import HydrationTest from "@/components/HydrationTest";
// const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), {
//   ssr: false,
// });

const ContactPage = () => {
  // No problem
  // Component on the Server Side is NOT the same as the Component on the Client Side
  const b = Math.floor(Math.random() * 10);
  console.log(b);

  return (
    // Page container
    <div className="pageContainer items-center mmd:flex-col">
      {/* Left section */}
      <div className="imgContainer h-[500px]">
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className="object-contain"
        />
      </div>

      {/* Right section */}
      <div className="flex-1">
        {/* use the component you imported without SSR */}
        {/* <HydrationTestNoSSR /> */}

        {/* Hydration Error Solution #3: hide the hydration problem */}
        {/* <div suppressHydrationWarning>{b}</div> */}

        {/* form */}
        <form action="" className="flex flex-col gap-[20px]">
          <input type="text" placeholder="Name and Surname" className="input" />
          <input type="text" placeholder="Email Address" className="input" />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="input"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className="input"
          />
          <button className="blueBtn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
