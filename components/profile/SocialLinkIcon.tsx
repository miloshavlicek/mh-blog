import styles from "./SocialLinkIcon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function SocialLinkIcon(props: {
  linkName: string;
  faIcon: IconDefinition;
  link: string;
}): ReactElement {
  return (
    <OverlayTrigger overlay={<Tooltip>{props.linkName}</Tooltip>}>
      <a
        href={props.link}
        target="_blank"
        aria-label={"Přejít na " + props.linkName}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={props.faIcon} className={styles.icon} />
      </a>
    </OverlayTrigger>
  );
}
