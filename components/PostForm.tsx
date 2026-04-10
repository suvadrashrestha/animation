"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePost, createPostSchema } from "@/lib/validation/post.validation";
import { AiOutlineClose } from "react-icons/ai";
import { outfit } from "@/lib/font";

export default function PostForm({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreatePost>({
    resolver: zodResolver(createPostSchema),
  });

  const onSubmit = async (data: CreatePost) => {
    try {
      console.log("Submitting post:", data);

      const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");

      existingPosts.push(data);

      localStorage.setItem("posts", JSON.stringify(existingPosts));

      alert("Post submitted successfully!");
      reset();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50  flex justify-center items-center p-4 z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${outfit.className} relative bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-800 "
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Post</h2>

        {/* Title  */}
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className={`border p-2 rounded focus:outline-none focus:ring-2 ${
              errors.title
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-400"
            }`}
            placeholder="Enter post title"
          />
          {errors.title && (
            <span className="text-red-500 text-sm mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="mb-1 font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            className={`border p-2 rounded focus:outline-none focus:ring-2 ${
              errors.description
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-400"
            }`}
            placeholder="Enter post description"
            rows={5}
          />
          {errors.description && (
            <span className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#1DA077] cursor-pointer text-white py-2 rounded hover:bg-[#159A63] transition disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
