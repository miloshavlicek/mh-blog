import { menuDefinition } from "../menuDefinition";
import { ReactElement } from "react";
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
          <a
            href="https://cothema.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
            aria-label="Přejít na úvodní stranu"
          >
            Cothema s.r.o.
          </a>
          <span className="mx-2">•</span>
          <a
            href="https://cothema.com/cz/obchodni-podminky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            Obchodní podmínky a ochrana soukromí
          </a>
        </p>
      </footer>
    </Container>
  );
}
