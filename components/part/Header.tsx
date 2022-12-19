import Link from "next/link";
import { menuDefinition } from "../menuDefinition";
import { ReactElement } from "react";
import LoginBtn from "../LoginBtn";
import { Container } from "react-bootstrap";

export default function Header(): ReactElement {
  return (
    <header className="sticky-top p-3 text-bg-primary" style={{ zIndex: 100 }}>
      <Container>
        <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link href="/" className="text-white text-decoration-none">
            <b>Žij svou vášní!</b>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {menuDefinition.items
              .filter((item) => !item.hidden)
              .map((item) => {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      key={item.href}
                      className="nav-link px-2 text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>

          <div className="text-end">
            <LoginBtn
              signInClass="btn-outline-light"
              signOutClass="btn-outline-light"
            />
          </div>
        </nav>
      </Container>
    </header>
  );
}
