import Image from "next/image";

// dynamic page for each blog post from whatever user
const SinglePostPage = () => {
  return (
    // Page container
    <div className="pageContainer">
      {/* Left section */}
      <div className="imgContainer h-[calc(100vh-200px)] mmd:hidden">
        {/* blog photo */}
        <Image
          src="https://images.pexels.com/photos/20157706/pexels-photo-20157706/free-photo-of-tram-on-street-by-estrela-basilica-in-lisbon-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Blog Photo"
          fill
          className="object-cover"
        />
      </div>

      {/* Right section */}
      <div className="flex flex-[2] flex-col gap-[50px]">
        {/* blog title */}
        <h1 className="text-[64px]">Title</h1>

        {/* blog information */}
        <div className="flex gap-[20px]">
          {/* user profile picture */}
          <Image
            src="/noavatar.png"
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-[50%] object-cover"
          />

          {/* author's name */}
          <div className="flex flex-col gap-[10px]">
            <span className="font-bold text-gray-500">Author</span>
            <span className="font-medium">Terry Jefferson</span>
          </div>

          {/* blog post release date */}
          <div className="flex flex-col gap-[10px]">
            <span className="font-bold text-gray-500">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>
        </div>

        {/* blog description */}
        <div className="text-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          nulla blanditiis eveniet dolore, distinctio laborum, quia deserunt
          harum deleniti autem officiis, aperiam cumque eius! Iusto illo,
          reiciendis eos, provident hic soluta ad suscipit aperiam repudiandae
          facere, odio nisi voluptatem deserunt ullam esse. Iure mollitia nobis
          dolore dolor, commodi vitae quidem.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
