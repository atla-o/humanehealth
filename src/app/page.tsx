import Link from "next/link";
import { clinicDesks } from "@/lib/nest";

export const dynamic = "force-dynamic";

const added = [
  { name: "acashi", href: "https://acashi.devoutshaman.com" },
  { name: "devoutshaman", href: "https://devoutshaman.com" },
  { name: "develop cures", href: "/develop-cures" },
] as const;

export default function HomePage() {
  return (
    <div className="home">
      <h1>humanehealth</h1>
      <ul className="list">
        {clinicDesks.map((desk) => (
          <li key={desk.slug}>
            <Link className="card desk-link" href={`/ops/${desk.slug}`}>
              <h3>
                <strong>{desk.name}</strong>
              </h3>
              <p>{desk.summary}</p>
            </Link>
          </li>
        ))}
        {added.map((item) => (
          <li key={item.name}>
            {item.href.startsWith("/") ? (
              <Link className="card desk-link" href={item.href}>
                <h3>
                  <strong>{item.name}</strong>
                </h3>
              </Link>
            ) : (
              <a className="card desk-link" href={item.href}>
                <h3>
                  <strong>{item.name}</strong>
                </h3>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
