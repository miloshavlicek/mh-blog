import { useAuth0 } from "@auth0/auth0-react";
import { ReactElement } from "react";

export default function LoginBtn(props: {
  signOutClass?: string;
  signInClass?: string;
}): ReactElement {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <button
          className={
            "btn" +
            (props.signOutClass
              ? " " + props.signOutClass
              : " btn-outline-dark")
          }
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Odhlásit se
        </button>
      ) : (
        <button
          type="button"
          className={
            "btn" +
            (props.signInClass ? " " + props.signInClass : " btn-primary")
          }
          onClick={async () => await loginWithPopup()}
        >
          Přihlásit se
        </button>
      )}
    </>
  );
}
