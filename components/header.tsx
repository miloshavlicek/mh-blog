import Link from "next/link";
import Container from "../components/container";
import { menuDefinition } from "./menuDefinition";

export default function Header() {
  return (
    <header
      className="sticky top-0 py-6 bg-gray-800 text-white"
      style={{ zIndex: 100 }}
    >
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">
            <b>Miloš Havlíček</b>
          </Link>

          {menuDefinition.items
            .filter((item) => !item.hidden)
            .map((item) => {
              return (
                <Link href={item.href} key={item.href}>
                  {item.title}
                </Link>
              );
            })}
        </nav>
      </Container>
    </header>
  );
}
