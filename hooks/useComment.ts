import React, { useState } from "react";
import useSWR from "swr";
import { Comment } from "../model/comment/Comment";

const fetcher = async (url: string) =>
  await fetch(url).then(async (res) => await res.json());

export default function useComments() {
  const [text, setText] = useState("");

  const { data: comments, mutate } = useSWR<Comment[]>(
    "/api/comment",
    fetcher,
    {
      fallbackData: [],
    }
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setText("");
      await mutate();
    } catch (e) {
      console.log(e);
    }
  };

  const onDelete = async (comment: Comment) => {
    try {
      await fetch("/api/comment", {
        method: "DELETE",
        body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await mutate();
    } catch (e) {
      console.log(e);
    }
  };

  return { text, setText, comments, onSubmit, onDelete };
}
