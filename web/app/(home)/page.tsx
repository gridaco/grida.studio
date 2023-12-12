import Link from "next/link";
import { Card } from "@/components/card";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import HomeHeroCarousel from "@/components/home-hero/home-hero-carousel";
import HomeHeroItem from "@/components/home-hero/home-hero-carousel-item";


export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const hero_posts = posts.filter((post) => post.featured);

  return (
    <main className="relative">

      <HomeHeroCarousel interval={6000}>
        {
          hero_posts.map((post, i) => (
            <Link key={i} href={`/works/${post._raw.flattenedPath}`}>
              <HomeHeroItem
                key={i}
                title={post.title}
                description={post.description_short}
                cover={post.cover}
                coverVideo={post.cover_video}
                color={post.cover_foreground}
                backgroundColor={post.cover_background}
              />
            </Link>
          ))
        }
      </HomeHeroCarousel>

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
