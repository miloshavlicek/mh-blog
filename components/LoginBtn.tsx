import { ReactElement } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function LoginBtn(props: {
  signOutClass?: string;
  signInClass?: string;
  className?: string;
  logInOnly?: boolean;
}): ReactElement {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <></>;
  if (error) return <></>;

  const logInComponent = (
    <Link
      className={
        "btn" +
        (props.signInClass ? " " + props.signInClass : " btn-primary") +
        (props.className ? " " + props.className : "")
      }
      href="/api/auth/login"
    >
      Přihlásit se
    </Link>
  );

  const logOutComponent = (
    <Link
      className={
        "btn" +
        (props.signOutClass ? " " + props.signOutClass : " btn-outline-dark") +
        (props.className ? " " + props.className : "")
      }
      href="/api/auth/logout"
    >
      Odhlásit se
    </Link>
  );

  return user ? (
    props.logInOnly === true ? (
      <></>
    ) : (
      logOutComponent
    )
  ) : (
    logInComponent
  );
}
