import React, { useState } from "react";
import useSWR from "swr";
import { useAuth0 } from "@auth0/auth0-react";
import { Comment } from "../model/comment/Comment";

const fetcher = async (url: string) =>
  await fetch(url).then(async (res) => await res.json());

export default function useComments() {
  const { getAccessTokenSilently } = useAuth0();
  const [text, setText] = useState("");

  const { data: comments, mutate } = useSWR<Comment[]>("/api/ui", fetcher, {
    fallbackData: [],
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();

    try {
      await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      setText("");
      await mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (comment: Comment) => {
    const token = await getAccessTokenSilently();

    try {
      await fetch("/api/comment", {
        method: "DELETE",
        body: JSON.stringify({ comment }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      await mutate();
    } catch (err) {
      console.log(err);
    }
  };

  return { text, setText, comments, onSubmit, onDelete };
}
