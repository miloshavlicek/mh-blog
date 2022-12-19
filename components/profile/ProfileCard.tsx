import styles from "./ProfileCard.module.scss";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import SocialLinkIcon from "./SocialLinkIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import Image from "next/image";
import { ReactElement } from "react";
import { Container } from "react-bootstrap";

export default function ProfileCard(props: {
  name: string;
  jobTitle?: string;
  description: string;
  profilePhoto: string;
  location?: string;
  linkToFacebook?: string;
  linkToLinkedIn?: string;
  linkToGitHub?: string;
}): ReactElement {
  return (
    <Container className={styles.container}>
      <div className={styles.profileCard}>
        <div>
          <div className="d-flex">
            <div className={styles.profileImage}>
              <Image
                src={props.profilePhoto}
                alt={"Fotografie:" + props.name}
                width={105}
                height={140}
              />
            </div>

            <div className={styles.profileHeading}>
              <h2 className={styles.name + " text-primary"}>{props.name}</h2>

              <div className={styles.line}></div>

              {props.jobTitle && (
                <p className={styles.jobTitle}>{props.jobTitle}</p>
              )}
            </div>
          </div>

          <div className={styles.profileContent}>
            {props.description && <p>{props.description}</p>}
          </div>

          <div>
            {props.linkToLinkedIn && (
              <SocialLinkIcon
                socialSiteName="LinkedIn"
                faIcon={faLinkedin}
                link={props.linkToLinkedIn}
              />
            )}

            {props.linkToFacebook && (
              <SocialLinkIcon
                socialSiteName="Facebook"
                faIcon={faFacebookSquare}
                link={props.linkToFacebook}
              />
            )}

            {props.linkToGitHub && (
              <SocialLinkIcon
                socialSiteName="GitHub"
                faIcon={faGithub}
                link={props.linkToGitHub}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
