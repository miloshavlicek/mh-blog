import styles from "./CommentList.module.scss";
import distanceToNow from "../../lib/utils/dateRelative";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { ReactElement } from "react";
import { Comment } from "../../model/comment/Comment";
import { useUser } from "@auth0/nextjs-auth0/client";

interface CommentListProps {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
}

export default function CommentList({
  comments,
  onDelete,
}: CommentListProps): ReactElement {
  const { user } = useUser();
  const isAdmin =
    user != null && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL;

  return (
    <div className="space-y-6 mt-4 mb-5">
      {comments?.map((comment) => {
        const isAuthor = user && user.sub === comment.user.sub;

        return (
          <div key={comment.created_at} className="d-flex mt-4">
            <div className="flex-shrink-0">
              <img
                src={comment.user.picture}
                alt={comment.user.name}
                width={40}
                height={40}
                className="rounded-circle"
              />
            </div>

            <div className="flex-grow-1 ms-3">
              <div className="d-flex">
                <b>{comment.user.name}</b>
                <time className="text-muted ms-2">
                  {distanceToNow(comment.created_at)}
                </time>
                {(isAdmin || isAuthor) && (
                  <button
                    className={styles.deleteButton + " ms-1"}
                    onClick={async () => await onDelete(comment)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                )}
              </div>

              <div>{comment.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
