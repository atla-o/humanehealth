import Link from "next/link";
import { clinicArms, clinicDesks, investorTops } from "@/lib/nest";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <p className="kicker">Devo clinic network</p>
      <h1>Humanehealth</h1>
      <p className="lede">
        Clinic operations hub. Arms keep their own repos. This page names them
        and links out. The desks below take a real request on this server.
      </p>

      <section>
        <h2>Clinic arms</h2>
        <ul className="list">
          {clinicArms.map((arm) => (
            <li className="card" key={arm.name}>
              <h3>{arm.name}</h3>
              <p>{arm.role}</p>
              {arm.links.length > 0 ? (
                <p className="links">
                  {arm.links.map((link) => (
                    <a key={link.href} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

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

      <section>
        <h2>Investor tops</h2>
        <ul className="list">
          {investorTops.map((top) => (
            <li className="card" key={top.name}>
              <h3>
                {top.name}
                {top.here ? " (here)" : ""}
              </h3>
              <p>{top.role}</p>
              <p className="links">
                {top.links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </p>
            </li>
          ))}
        </ul>
        <p>
          Recreation studios stay on{" "}
          <a href="https://github.com/atla-o/arcada">Arcada</a>.
        </p>
      </section>
    </>
  );
}
