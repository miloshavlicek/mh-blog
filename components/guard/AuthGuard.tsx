import styles from "./AuthGuard.module.scss";
import { ReactElement, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

export default function AuthGuard({ children }: Props): ReactElement {
  const { user } = useUser();

  if (!user) {
    return (
      <div className={styles.box}>
        <div className="display-6 text-primary">
          <FontAwesomeIcon icon={faLock} className="me-2" /> Tato sekce je k
          dispozici pouze pro přihlášené uživatele.
        </div>

        <Link className="btn btn-primary btn-lg mt-5" href="/api/auth/login">
          Přihlásit se
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
