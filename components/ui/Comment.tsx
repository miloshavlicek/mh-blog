import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import useComments from "../../hooks/useComment";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import AuthGuard from "../guard/AuthGuard";

interface Props {
  className?: string;
}

export default function Comment({ className }: Props): ReactElement {
  const { text, setText, comments, onSubmit, onDelete } = useComments();

  return (
    <div className={className}>
      <h2 className={"mt-4"}>
        <FontAwesomeIcon icon={faComments} className="me-2" /> Diskuze
      </h2>

      <AuthGuard>
        <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
      </AuthGuard>
    </div>
  );
}
