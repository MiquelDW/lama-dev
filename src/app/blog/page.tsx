import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-[20px]">
      <div className="w-full">
        <PostCard />
      </div>
      <div className="w-full">
        <PostCard />
      </div>
      <div className="w-full">
        <PostCard />
      </div>
      <div className="w-full">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
