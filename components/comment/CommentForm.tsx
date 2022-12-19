import { useAuth0 } from "@auth0/auth0-react";
import { FormEvent, ReactElement } from "react";
import LoginBtn from "../LoginBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
  const { isAuthenticated } = useAuth0();

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="form-control"
        rows={2}
        placeholder={
          isAuthenticated
            ? `Co Tě k tématu ještě napadá?`
            : "Pro komentování se, prosím, přihlas."
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="mt-4">
        <LoginBtn />

        {isAuthenticated && (
          <button className="btn btn-primary ms-2">
            Odeslat
            <FontAwesomeIcon icon={faPaperPlane} className="ms-1" />
          </button>
        )}
      </div>
    </form>
  );
}
