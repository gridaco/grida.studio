import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="mt-40">
      <section>
        <span className="uppercase text-neutral-500">email</span>
        <div className="flex gap-4 items-center">
          <Link className="hover:underline" href="mailto:studios@grida.co">
            <h1 className="text-2xl font-regular">studios@grida.co</h1>
          </Link>
          <span className="text-2xl">/</span>
          <Link className="hover:underline" href="mailto:han@grida.co">
            <h1 className="text-2xl font-regular">han@grida.co</h1>
          </Link>
        </div>
      </section>
      <div style={{ height: 80 }} />
      <section>
        <span className="uppercase text-neutral-500">cal.com</span>
        <Link
          className="hover:underline"
          href="https://cal.com/universe-from-grida/30min"
        >
          <h1 className="text-2xl font-regular">RSVP 30 Minutes — @UNIVERSE</h1>
        </Link>
        <Link
          className="hover:underline"
          href="https://cal.com/universe-from-grida/30min"
        >
          <h1 className="text-2xl font-regular">RSVP 30 Minutes — @HAN</h1>
        </Link>
        <Link
          className="hover:underline"
          href="https://cal.com/universe-from-grida/30min"
        >
          <h1 className="text-2xl font-regular">RSVP 30 Minutes — @RYU</h1>
        </Link>
      </section>
    </div>
  );
}
