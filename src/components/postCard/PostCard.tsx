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
        <span className="m-auto w-[10%] rotate-[270deg] text-[12px]">
          01.01.2024
        </span>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col">
        <h1 className="mb-[20px] w-[90%] text-[24px]">Title</h1>
        <p className="mb-[20px] w-[90%] font-light text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          accusantium asperiores, placeat sit dolore amet, voluptatibus quam
          distinctio, ratione pariatur excepturi! Iusto, unde quidem! Rem nemo
          ratione blanditiis hic culpa? Dolores omnis earum perferendis odio
          corporis minima rem officia! Sequi nulla fugit cum accusantium.
        </p>
        {/* navigate user to the specified route */}
        <Link className="underline" href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
