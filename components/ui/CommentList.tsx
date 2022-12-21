import distanceToNow from "../../lib/utils/dateRelative";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { ReactElement } from "react";
import Image from "next/image";
import { Comment } from "../../model/comment/Comment";

interface CommentListProps {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
}

export default function CommentList({
  comments,
  onDelete,
}: CommentListProps): ReactElement {
  const { user } = useAuth0();

  return (
    <div className="space-y-6 mt-10">
      {comments?.map((comment) => {
        const isAuthor = user != null && user.sub === comment.user.sub;
        const isAdmin =
          user != null &&
          user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL;

        return (
          <div key={comment.created_at} className="flex space-x-4">
            <div className="flex-shrink-0">
              <Image
                src={comment.user.picture}
                alt={comment.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>

            <div className="flex-grow">
              <div className="flex space-x-2">
                <b>{comment.user.name}</b>
                <time className="text-gray-400">
                  {distanceToNow(comment.created_at)}
                </time>
                {(isAdmin || isAuthor) && (
                  <button
                    className="text-gray-400 hover:text-red-500"
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