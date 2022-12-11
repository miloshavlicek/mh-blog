import Container from "../components/container";
import { menuDefinition } from "./menuDefinition";

export default function Footer() {
  return (
    <footer className="p-4 md:flex md:items-center md:justify-between md:p-6">
      <Container className="p-4 bg-white md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="/"
            aria-label="Přejít na úvodní stranu"
            className="hover:underline"
          >
            Miloš Havlíček
          </a>
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          {menuDefinition.items
            .filter((item) => !item.hidden)
            .map((item) => {
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-label={"Přejít na " + item.title}
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
        </ul>
      </Container>
    </footer>
  );
}
