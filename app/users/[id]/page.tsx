import PostList from "@/components/PostList";

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Failed to load users.</p>
      </div>
    );
  }
  const user = await res.json();
  return <PostList user={user} />;
};

export default PostPage;
