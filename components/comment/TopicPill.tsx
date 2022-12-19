import styles from "./TopicPill.module.scss";
import Link from "next/link";

export default function TopicPill(props: { slug: string; link?: boolean }) {
  const content = (
    <div className={styles.pill + " badge rounded-pill text-bg-secondary"}>
      #{props.slug}
    </div>
  );

  return props.link ? (
    <Link href={"/blog/topics/" + props.slug} className={"mx-1"}>
      {content}
    </Link>
  ) : (
    content
  );
}
