import { menuDefinition } from "../menuDefinition";
import { ReactElement } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Footer(): ReactElement {
  return (
    <Container>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {menuDefinition.items
            .filter((item) => !item.hidden)
            .map((item) => {
              return (
                <li key={item.href} className="nav-item">
                  <a
                    href={item.href}
                    aria-label={"Přejít na " + item.title}
                    className="nav-link px-2 text-muted"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
        </ul>

        <p className="text-center text-muted">
          © 2022{" "}
          <Link
            href="/"
            aria-label="Přejít na úvodní stranu"
            className="hover:underline"
          >
            Miloš Havlíček
          </Link>
        </p>
      </footer>
    </Container>
  );
}
