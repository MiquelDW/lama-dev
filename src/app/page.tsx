// Next.js recommends using the '<Image />' component instead of the regular '<img>' HTML element to automatically optimize images, potentially improving LCP (Largest Contentful Paint) and overall page performance
import Image from "next/image";

export default function Home() {
  return (
    // Page container
    <div className="pageContainer">
      {/* Left section */}
      <div className="textContainer">
        {/* title + description */}
        <h1 className="text-[96px] font-bold leading-tight">
          Creative Thoughts Agency.
        </h1>
        <p className="text-[20px]">
          We are a creative agency that specializes in creating beautiful
          websites and applications for our clients.
        </p>

        {/* buttons */}
        <div className="flex gap-[20px]">
          <button className="blueBtn min-[120px]">Learn More</button>
          <button className="min-[120px] cursor-pointer rounded-[5px] border-none bg-default-text p-[20px] text-default-bg">
            Contact
          </button>
        </div>

        {/* brands */}
        <div className="relative h-[50px] w-[500px] grayscale">
          <Image src="/brands.png" alt="Brands images" fill />
        </div>
      </div>

      {/* Right section */}
      <div className="imgContainer">
        <Image
          src="/hero.gif"
          alt="Home Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
