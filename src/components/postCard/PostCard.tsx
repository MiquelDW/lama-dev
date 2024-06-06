import Image from "next/image";
// navigate users to the specified routes within the application without a full page reload
import Link from "next/link";

const PostCard = () => {
  return (
    // Card container
    <div className="mb-[20px] flex flex-col gap-[20px]">
      {/* Top section */}
      <div className="flex">
        <div className="relative h-[400px] w-[90%]">
          <Image
            src="https://images.pexels.com/photos/20157706/pexels-photo-20157706/free-photo-of-tram-on-street-by-estrela-basilica-in-lisbon-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Post Image"
            fill
            className="object-cover"
          />
        </div>
        <span className="w-[10%] rotate-[270deg] text-[12px]">01.01.2024</span>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col">
        <h1 className="">Title</h1>
        <p className="">Description</p>
        {/* navigate users to the specified route */}
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
