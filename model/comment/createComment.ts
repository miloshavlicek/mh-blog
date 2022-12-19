import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../lib/utils/redis";
import { nanoid } from "nanoid";
import clearUrl from "../../lib/utils/clearUrl";
import { Comment } from "./Comment";
import { getUser } from "../User";

export default async function createComments(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const url = req.headers.referer ? clearUrl(req.headers.referer) : "";
  const { text } = req.body;
  const { authorization } = req.headers;

  if (!text || !authorization) {
    return res.status(400).json({ message: "Missing parameter." });
  }

  if (redis == null) {
    return res
      .status(400)
      .json({ message: "Failed to connect to redis client." });
  }

  try {
    // verify user token
    const user = await getUser(authorization);
    if (!user) return res.status(400).json({ message: "Need authorization." });

    const { name, picture, sub, email } = user;

    const comment: Comment = {
      id: nanoid(),
      created_at: Date.now(),
      url,
      text,
      user: { name, picture, sub, email },
    };

    // write data
    await redis.lpush(url, JSON.stringify(comment));

    return res.status(200).json(comment);
  } catch (_) {
    return res.status(400).json({ message: "Unexpected error occurred." });
  }
}
