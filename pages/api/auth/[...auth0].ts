import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "@auth0/nextjs-auth0/src/session";

const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
) => {
  const payload = {
    userId: session.user.sub,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  session.user.accessToken = jwt.sign(
    payload,
    process.env.SUPABASE_JWT_SECRET!
  );

  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (e: any) {
      res.status(e.status || 500).end(e.message);
    }
  },
});
