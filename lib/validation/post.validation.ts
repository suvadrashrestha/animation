import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export type CreatePost = z.infer<typeof createPostSchema>;
