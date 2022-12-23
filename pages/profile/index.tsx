// import styles from "./index.module.scss";
import { ReactElement } from "react";
import Heading from "../../components/part/Heading";
import { Container } from "react-bootstrap";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

interface Props {}

export default function ProfilePage({}: Props): ReactElement {
  const { user } = useUser();

  return (
    <Container>
      <Heading level={1} className="mt-4">
        Členská sekce
      </Heading>

      <div className="px-2 pb-4 text-center">
        {user?.picture && (
          <div className="mb-2">
            <img
              src={user?.picture}
              className={"rounded-circle"}
              alt={"Profilová fotografie uživatele"}
              width={100}
            />
          </div>
        )}

        <b>{user?.name}</b>
        <br />
        {user?.email}
        <br />
        <br />
        <Link className={"btn btn-outline-dark"} href="/api/auth/logout">
          Odhlásit se
        </Link>
      </div>
    </Container>
  );
}

export const getServerSideProps = withPageAuthRequired();
