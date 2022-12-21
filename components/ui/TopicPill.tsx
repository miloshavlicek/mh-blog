import styles from "./TopicPill.module.scss";
import Link from "next/link";

export default function TopicPill(props: { slug: string; link?: boolean }) {
  const content = (
    <div className={styles.pill + " badge rounded-pill text-bg-secondary"}>
      #{props.slug}
    </div>
  );

  return (
    <div className="d-inline mx-1">
      {props.link ? (
        <Link href={"/blog/topics/" + props.slug}>{content}</Link>
      ) : (
        content
      )}
    </div>
  );
}
