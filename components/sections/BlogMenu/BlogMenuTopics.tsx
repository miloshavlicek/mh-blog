import styles from "./BlogMenu.module.scss";
import { ReactElement } from "react";
import { Topic } from "../../../model/Topic";
import Link from "next/link";

interface Props {
  topics: Topic[];
}

export default function BlogMenuTopics({ topics }: Props): ReactElement {
  return (
    <div className="mb-4">
      <h3 className="fw-bold">Témata</h3>

      <ul className="nav nav-pills flex-column mb-auto">
        {topics.map((topic: Topic) => (
          <li className="nav-item">
            <Link
              href={`/blog/topics/${topic.slug}`}
              className={styles.navLink + " nav-link"}
              aria-current="page"
            >
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
