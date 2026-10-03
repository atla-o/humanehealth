import Link from "next/link";
import { clinicDesks } from "@/lib/nest";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <p className="kicker">Devo clinic network</p>
      <h1>Humanehealth</h1>
      <p className="lede">
        Clinic desks. Each one takes a request on this server.
      </p>

      <section>
        <h2>Clinic desks</h2>
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
        </ul>
      </section>
    </>
  );
}
