import Link from "next/link";
import { Card } from "@/components/card";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";


export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="relative">
      <main className="md:pl-12 md:pr-12 m-auto max-w-screen-2xl pl-4 pr-4 min-h-screen ">
        <section className="md:pb-40 pb-16">
          <div style={{ height: 40 }} />
          <div style={{ height: 40 }} />
          <div style={{ height: 40 }} />
          <div className="flex flex-col gap-20">
            {posts.map((post) => {
              // const data = (portfolios as any)[key] as Work;
              const y = new Date(post.date).getFullYear();

              return (
                <Link key={post._id} href={post.url}>
                  <Card
                    title={
                      <span>
                        {y} —<br />
                        {post.title}
                      </span>
                    }
                    worktype={post.tags?.[0] ?? ""}
                    description={post.description}
                    image={post.cover}
                    video={post.cover_video}
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </main>
  );
}
