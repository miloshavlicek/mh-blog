import styles from "./YouTubeVideo.module.scss";
import { ReactElement } from "react";

interface Props {
  slug: string;
}

export default function YouTubeVideo({ slug }: Props): ReactElement {
  return (
    <iframe
      className={styles.iframe}
      height="315"
      src={"https://www.youtube.com/embed/" + slug}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
