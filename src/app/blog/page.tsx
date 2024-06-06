import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-[20px]">
      <div className="w-[30%] mxl:w-[45%] mmd:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] mxl:w-[45%] mmd:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] mxl:w-[45%] mmd:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] mxl:w-[45%] mmd:w-full">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
