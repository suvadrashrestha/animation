"use client";
import { outfit } from "@/lib/font";
import { CiCirclePlus } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Table from "./Table";
import { useEffect, useState } from "react";
import { IUser, useUserStore } from "@/store/userStore";
import PostForm from "./PostForm";
import Link from "next/link";

const UserList = ({ users }: { users: IUser[] }) => {
  const setUsers = useUserStore((state) => state.setUsers);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setUsers(users);
  }, [users, setUsers]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "companyName", label: "Company Name" },
  ];

  const actions = (item: IUser) => (
    <Link href={`/users/${item.id}`} className="view-post-btn">
      View Post <FaEye />
    </Link>
  );

  return (
    <div className="h-screen relative">
      <PostForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${outfit.className} px-2 sm:px-5 md:px-8 lg:px-18 xl:px-25 pt-6  text-nowrap text-xs sm:text-sm md:text-lg  w-full flex flex-col gap-8 h-full`}
      >
        <div className="flex gap-2  justify-around h-[10vh] items-center">
          <input
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="w-[65%] sm:w-[50%] border outline-none  border-black p-2 md:p-3 text-gray-500 rounded-full"
            type="text"
            placeholder="Search using name or email"
          />
          <button
            onClick={() => setIsOpen(true)}
            className={` text-nowrap flex items-center gap-2  rounded-lg cursor-pointer hover:border-[#1DA077] transition-all duration-100 ease-in hover:bg-white hover:text-[#1DA077] md:py-3 p-2  md:px-4 bg-[#1DA077] text-white border`}
          >
            New Post <CiCirclePlus />
          </button>
        </div>
        <div className="  flex-1 rounded-xl overflow-auto scrollbar-hide ">
          <Table<IUser>
            columns={columns}
            actions={actions}
            data={filteredUsers}
          />
        </div>
      </div>
    </div>
  );
};

export default UserList;
