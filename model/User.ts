export interface User {
  name: string;
  picture: string;
  sub: string;
  email?: string;
}

export async function getUser(token: string) {
  const response = await fetch(
    `${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}
