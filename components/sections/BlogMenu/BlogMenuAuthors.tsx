import styles from "./BlogMenu.module.scss";
import { ReactElement } from "react";
import { Author } from "../../../model/Author";
import Link from "next/link";
import Avatar from "../../ui/Avatar";

interface Props {
  authors: Author[];
}

export default function BlogMenuAuthors({ authors }: Props): ReactElement {
  return (
    <div className="mb-4">
      <h3 className="fw-bold">Autoři</h3>

      <ul className="nav nav-pills flex-column mb-auto">
        {authors.map((author: Author) => (
          <li className="nav-item" key={author.slug}>
            <Link
              href={`/blog/authors/${author.slug}`}
              className={styles.navLink + " nav-link"}
              aria-current="page"
            >
              <Avatar
                profilePhoto={author.profilePhoto}
                alt={"Autor " + author.name}
                size={30}
                className={styles.menuAvatar + " me-2"}
              />
              {author.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
