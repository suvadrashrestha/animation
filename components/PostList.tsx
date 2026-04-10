"use client";
import { outfit } from "@/lib/font";

import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { IUser } from "@/store/userStore";

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostList = ({ user }: { user: IUser }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(2);

  const totalPages = Math.ceil(10 / limit);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${user.id}&_page=${currentPage}&_limit=${limit}`,
          {
            cache: "no-store",
          },
        );

        const post = await res.json();
        setPosts(post);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [limit, currentPage, user.id]);

  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-full sm:w-[75%] lg:w-[50%] ${outfit.className} h-screen `}
      >
        <p
          className={`text-center  text-3xl font-bold tracking-wide uppercase p-3`}
        >
          Posts
        </p>
        <Link href="/users" className="">
          Go back
        </Link>
        {loading ? (
          <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
            <div className="w-16 h-16 border-4 border-t-[#1DA077] border-gray-300 rounded-full animate-spin"></div>
            <p
              className={` ${outfit.className} text-lg sm:text-xl md:text-2xl font-semibold `}
            >
              Loading...
            </p>
          </div>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              className="border mt-5 rounded-xl border-gray-300 py-3  md:py-6 px-4 md:px-8 flex flex-col gap-5"
            >
              <div className=" flex items-center gap-4">
                <div className="w-13 h-13 rounded-full flex justify-center items-center text-white  bg-red-400 ">
                  SS
                </div>
                <div className="flex flex-col  justify-center">
                  <span className="h-5">{user?.name}</span>
                  <span className="h-5 text-md text-gray-500">
                    {user?.username}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold tracking-wide ">
                  {post.title}
                </p>
                <p className="mt-4 text-sm md:text-md">{post.body}</p>
              </div>
            </div>
          ))
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          limit={limit}
          setPage={setCurrentPage}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
};

export default PostList;
