import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../lib/utils/redis";
import clearUrl from "../../lib/utils/clearUrl";
import { Comment } from "./Comment";

export default async function fetchComment(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const url = req.headers.referer ? clearUrl(req.headers.referer) : "";

  if (redis == null) {
    return res.status(500).json({ message: "Failed to connect to redis." });
  }

  try {
    // get data
    const rawComments = await redis.lrange(url, 0, -1);

    // string data to object
    const comments = rawComments.map((c) => {
      const comment: Comment = JSON.parse(c);
      delete comment.user.email;
      return comment;
    });

    return res.status(200).json(comments);
  } catch (_) {
    return res.status(400).json({ message: "Unexpected error occurred." });
  }
}
