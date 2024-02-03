import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

export default async function ConsoleHome() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getUser();

  if (!data?.user) {
    redirect("/signin?next=/console");
  }

  return <main>{/*  */}</main>;
}
