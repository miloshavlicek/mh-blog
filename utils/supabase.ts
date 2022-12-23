import { createClient } from "@supabase/supabase-js";

const getSupabase = (accessToken: string) => {
  const options = {} as any;

  if (accessToken) {
    options.global = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    options
  );

  return supabase;
};

export { getSupabase };
