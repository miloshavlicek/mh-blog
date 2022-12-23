import { FormEvent, ReactElement } from "react";
import LoginBtn from "../LoginBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@auth0/nextjs-auth0/client";

interface CommentFormProps {
  text: string;
  setText: Function;
  onSubmit: (e: FormEvent) => Promise<void>;
}

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps): ReactElement {
  const { user } = useUser();

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="form-control"
        rows={2}
        placeholder={
          user
            ? `Co Tě k tématu ještě napadá?`
            : "Pro komentování se, prosím, přihlas."
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!user}
      />

      <div className="mt-4">
        <LoginBtn logInOnly className="me-2" />

        {user && (
          <button className="btn btn-primary">
            Odeslat
            <FontAwesomeIcon icon={faPaperPlane} className="ms-1" />
          </button>
        )}
      </div>
    </form>
  );
}
