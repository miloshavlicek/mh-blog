import styles from "./AuthGuard.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

interface Props {
  children: ReactNode;
}

export default function AuthGuard({ children }: Props): ReactElement {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className={styles.box}>
        <div className="display-6 text-primary">
          <FontAwesomeIcon icon={faLock} className="me-2" /> Tato sekce je k
          dispozici pouze pro přihlášené uživatele.
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg mt-5"
          onClick={async () => await loginWithPopup()}
        >
          Přihlásit se
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
