import Link from "next/link";

export default function DnsSolutionPage() {
  return <main>
    <header className="mt-40">
      <h1 className="text-4xl font-bold">Grida Studios DNS Solutions</h1>
    </header>
    <div className="mt-10">
      <p className="py-4">
        Grida Studios provides DNS solutions for your domain. We can provide you with a DNS server for your domain, or you can use our DNS server.
        <ul>
          <li>— Gmail Setup</li>
          <li>— DNS Record Management</li>
          <li>— Website Hosting</li>
        </ul>
      </p>
      <Link href="/https://payments.grida.co/b/14k8wN5X67Z61I4eVb">
        <button className="bg-black text-white px-4 py-2 rounded shadow-sm">
          Full DNS Management with $125/Querter
        </button>
      </Link>
    </div>
  </main>
}