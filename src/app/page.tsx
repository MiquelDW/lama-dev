// Next.js recommends using the '<Image />' component instead of the regular '<img>' HTML element to automatically optimize images, potentially improving LCP (Largest Contentful Paint) and overall page performance
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Left section */}
      <div className="">
        {/* title + description */}
        <h1 className="">Creative Thoughts Agency.</h1>
        <p>
          We are a creative agency that specializes in creating beautiful
          websites and applications for our clients.
        </p>

        {/* buttons */}
        <div>
          <button className="">Learn More</button>
          <button className="">Contact</button>
        </div>

        {/* brands */}
        <div>
          <Image src="/brands.png" alt="" width={500} height={500} />
        </div>
      </div>

      {/* right section */}
      <div className=""></div>
    </div>
  );
}
