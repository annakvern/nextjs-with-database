"use client";

import { Post } from "@prisma/client";
import { deletePost } from "../actions";

interface Props {
  post: Post;
}

export default function DeletePostButton(props: Props) {
  return (
    <button
      className="cursor-pointer p-1"
      onClick={() => deletePost(props.post.id)}
    >
      🗑️
    </button>
  );
}
