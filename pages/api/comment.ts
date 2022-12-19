import type { NextApiRequest, NextApiResponse } from "next";
import fetchComment from "../../model/comment/fetchComment";
import createComments from "../../model/comment/createComment";
import deleteComments from "../../model/comment/deleteComments";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  switch (req.method) {
    case "GET":
      return await fetchComment(req, res);
    case "POST":
      return await createComments(req, res);
    case "DELETE":
      return await deleteComments(req, res);
    default:
      return res.status(400).json({ message: "Invalid method." });
  }
}
