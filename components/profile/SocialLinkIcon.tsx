import styles from "./SocialLinkIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactElement } from "react";

export default function SocialLinkIcon(props: {
  socialSiteName: string;
  faIcon: IconDefinition;
  link: string;
}): ReactElement {
  return (
    <a
      href={props.link}
      target="_blank"
      aria-label={"Přejít na sociální síť " + props.socialSiteName}
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={props.faIcon} className={styles.icon} />
    </a>
  );
}
