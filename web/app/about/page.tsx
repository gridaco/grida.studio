import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Grida Studios",
  metadataBase: new URL("https://studio.grida.co"),
  openGraph: {
    images: "https://grida.co/bundle/og-image.jpg",
  },
};

export default function About() {
  return (
    <div className="mt-40 flex flex-col gap-40 max-w-screen-lg m-auto">
      <section className="flex flex-row gap-8">
        <h2 className="flex-1 text-4xl font-medium">About Grida Studios</h2>
        <p className="flex-1 text-sm font-regular text-neutral-500">
          Our uniqueness isn’t just in our experience, but in how we apply it.
          With the invaluable insights from the startup scene, we’ve learned to
          be agile, to iterate, and to pivot when necessary. This allows us to
          not only meet our clients’ needs but to anticipate them, always
          staying a step ahead in a constantly evolving landscape.
        </p>
      </section>
      <section className="md:gap-8 flex gap-4 items-between">
        <Member
          src="/team/universe.png"
          name="Universe"
          email="universe@grida.co"
        />
        <Member src="/team/ryu.png" name="Ryu" email="ryu@grida.co" />
        <Member src="/team/han.png" name="Han" email="han@grida.co" />
      </section>
      <section className="mt-40 flex">
        <div className="flex-1" />
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="flex-1 text-4xl font-medium">
            Innovation by Design, Inspired by Technology
          </h2>
          <p className="flex-1 text-sm font-regular text-neutral-500">
            Welcome to Grida Studios, where the worlds of innovative tech and
            transformative design unite. At our core, we are visionaries. Each
            founding member carries with them a rich tapestry of experiences,
            etched by the startup world and informed by the challenges of
            real-world product building. We&apos;ve seen firsthand how design
            and technology can synergize to create solutions that not only look
            good but also function seamlessly.
          </p>
        </div>
      </section>
      <section className="mt-40 flex">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="flex-1 text-4xl font-medium">
            Sustainable Branding - Our Pledge to the Future
          </h2>
          <p className="flex-1 text-sm font-regular text-neutral-500">
            At Grida Studios, we understand the power of branding. But we don’t
            just create brands, we nurture them, ensuring they are sustainable
            and adaptive. We believe in designs that don’t just capture the
            moment, but are resilient enough to evolve with the times, ensuring
            longevity and relevance.
          </p>
        </div>
        <div className="flex-1" />
      </section>
      <section className="mt-40 flex flex-row gap-8">
        <h2 className="flex-1 text-4xl font-medium">
          Our Philosophy: Depth Beyond Design
        </h2>
        <p className="flex-1 text-sm font-regular text-neutral-500">
          While our roots are embedded in technology, our heart lies in design.
          We hold a profound belief that design isn’t just about aesthetics;
          it&apos;s about understanding the underlying structures, purposes, and
          needs. Our approach isn&apos;t merely skin-deep. We delve deep,
          ensuring every project we undertake is infused with meaning, purpose,
          and a touch of the Grida essence.
        </p>
      </section>
      <footer className="mb-40" />
    </div>
  );
}

function Member({
  name,
  src,
  email,
}: {
  name: string;
  src: string;
  email: string;
}) {
  return (
    <div className="flex flex-col gap-4 hover:underline">
      <Image src={src} width={400} height={400} alt={email} />
      <span className="font-regular text-lg">{name}</span>
    </div>
  );
}
