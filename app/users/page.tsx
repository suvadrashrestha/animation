import UserList from "@/components/UserList";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Failed to load users.</p>
      </div>
    );
  }
  const users = await res.json();

  return <UserList users={users} />;
};

export default Page;
