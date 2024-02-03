"use client";

import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

const HOST_NAME = process.env.NEXT_PUBLIC_HOST_NAME || "http://localhost:3000";

export default function SigninPage() {
  const supabase = createPagesBrowserClient();

  return (
    <main className="md:pl-12 md:pr-12 m-auto max-w-screen-2xl pl-4 pr-4 min-h-screen mt-40">
      <button
        onClick={() => {
          supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              redirectTo: `${HOST_NAME}/auth/callback`,
            },
          });
        }}
      >
        Continue with Google
      </button>
    </main>
  );
}
