// Next.js recommends using the '<Image />' component instead of the regular '<img>' HTML element to automatically optimize images, potentially improving LCP (Largest Contentful Paint) and overall page performance
import Image from "next/image";

const AboutPage = () => {
  return (
    // Page container
    <div className="pageContainer mmd:flex-col">
      {/* exm. <Image /> */}
      {/* <div className="relative h-[500px] w-[500px]">
        <Image
          src="https://images.pexels.com/photos/10404290/pexels-photo-10404290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div> */}

      {/* Left section */}
      <div className="textContainer">
        {/* title + description */}
        <h2 className="text-btn-default">About Agency</h2>
        <h1 className="text-[54px] font-bold leading-tight">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-[20px] font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>

        {/* information about us */}
        <div className="flex items-center justify-between text-center mmd:flex-col mmd:gap-[50px]">
          <div className="box">
            <h1 className="boxtitle">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="box">
            <h1 className="boxtitle">234 K+</h1>
            <p>People reached</p>
          </div>
          <div className="box">
            <h1 className="boxtitle">5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="imgContainer">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AboutPage;
