import { NextApiRequest, NextApiResponse } from "next";
import clearUrl from "../../lib/utils/clearUrl";
import redis from "../../lib/utils/redis";
import { Comment } from "./Comment";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { getUser } from "../User";

export default async function deleteComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.headers.referer ? clearUrl(req.headers.referer) : "";
  const { comment }: { url: string; comment: Comment } = req.body;
  const accessToken = await getAccessToken(req, res);

  if (!comment) {
    return res.status(400).json({ message: "Missing parameter." });
  }

  if (redis == null) {
    return res.status(500).json({ message: "Failed to connect to redis." });
  }

  try {
    if (!accessToken.accessToken)
      return res.status(400).json({ message: "Invalid token." });

    const user = await getUser(accessToken.accessToken);

    comment.user.email = user.email ?? undefined;

    const isAdmin = process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL === user.email;
    const isAuthor = user.sub === comment.user.sub;

    if (!isAdmin && !isAuthor) {
      return res.status(400).json({ message: "Need authorization." });
    }

    // delete
    await redis.lrem(url, 0, JSON.stringify(comment));

    return res.status(200).end();
  } catch (e) {
    return res.status(400);
  }
}
