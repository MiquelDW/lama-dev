// Next.js recommends using the '<Image />' component instead of the regular '<img>' HTML element to automatically optimize images, potentially improving LCP (Largest Contentful Paint) and overall page performance
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      {/* image container */}
      <div className="relative h-[500px] w-[500px]">
        <Image
          src="https://images.pexels.com/photos/10404290/pexels-photo-10404290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
