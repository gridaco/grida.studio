import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import office_1 from "../../../public/images/office-1.jpg";

export const metadata: Metadata = {
  title: "About",
  description: "About Grida Studios",
  metadataBase: new URL("https://studio.grida.co"),
  openGraph: {
    images: ["/images/office-1.jpg"],
  },
};

export default function About() {
  return (
    <div className="mt-40 flex flex-col gap-10 md:gap-20 max-w-screen-2xl m-auto">
      <section className="flex flex-col md:flex-row gap-8">
        <h2 className="flex-1 text-4xl font-medium">About Grida Studios</h2>
        <p className="flex-1 text-sm font-regular text-neutral-500">
          Our uniqueness isn’t just in our experience, but in how we apply it.
          With the invaluable insights from the startup scene, we’ve learned to
          be agile, to iterate, and to pivot when necessary. This allows us to
          not only meet our clients’ needs but to anticipate them, always
          staying a step ahead in a constantly evolving landscape.
        </p>
      </section>
      <section>
        <Image
          priority
          placeholder="blur"
          className="w-full"
          src={office_1}
          width={1200}
          height={800}
          alt="office"
        />
      </section>
      <section className="mt-20 md:mt-40 flex">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="flex-1 text-4xl font-medium">
            Innovation by Design,
            <br />
            Inspired by Technology
          </h2>
          <p className="flex-1 text-sm font-regular text-neutral-500 max-w-xl">
            Welcome to Grida Studios, where the worlds of innovative tech and
            transformative design unite. At our core, we are visionaries. Each
            founding member carries with them a rich tapestry of experiences,
            etched by the startup world and informed by the challenges of
            real-world product building. We&apos;ve seen firsthand how design
            and technology can synergize to create solutions that not only look
            good but also function seamlessly.
            <br />
            <br />
            <Link className="underline" href="https://github.com/gridaco">
              Check out our Github
            </Link>{" "}
            to learn more about our works.
          </p>
        </div>
      </section>
      <section className="md:gap-8 flex flex-col md:flex-row gap-4 md:items-between">
        <Member
          src="/team/universe.png"
          name="Universe"
          email="universe@grida.co"
        />
        <Member src="/team/ryu.png" name="Ryu" email="ryu@grida.co" />
        <Member src="/team/han.png" name="Han" email="han@grida.co" />
      </section>
      <section className="mt-20 md:mt-40 flex">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="flex-1 text-4xl font-medium">
            Sustainable Branding -
            <br />
            Our Pledge to the Future
          </h2>
          <p className="flex-1 text-sm font-regular text-neutral-500 max-w-xl">
            At Grida Studios, we understand the power of branding. But we don’t
            just create brands, we nurture them, ensuring they are sustainable
            and adaptive. We believe in designs that don’t just capture the
            moment, but are resilient enough to evolve with the times, ensuring
            longevity and relevance.
          </p>
        </div>
        <div className="flex-1 hidden md:block" />
      </section>
      <section className="mt-20 md:mt-40 flex">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="flex-1 text-4xl font-medium">
            Our Philosophy:
            <br />
            Depth Beyond Design
          </h2>
          <p className="flex-1 text-sm font-regular text-neutral-500 max-w-xl">
            While our roots are embedded in technology, our heart lies in
            design. We hold a profound belief that design isn’t just about
            aesthetics; it&apos;s about understanding the underlying structures,
            purposes, and needs. Our approach isn&apos;t merely skin-deep. We
            delve deep, ensuring every project we undertake is infused with
            meaning, purpose, and a touch of the Grida essence.
          </p>
        </div>
        <div className="flex-1 hidden md:block" />
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
      <Image src={src} width={800} height={800} alt={email} />
      <span className="font-regular text-lg">{name}</span>
    </div>
  );
}
