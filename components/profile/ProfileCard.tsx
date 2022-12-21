import styles from "./ProfileCard.module.scss";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import SocialLinkIcon from "./SocialLinkIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import Image from "next/image";
import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function ProfileCard(props: {
  name: string;
  jobTitle?: string;
  content: string;
  profilePhoto: string;
  location?: string;
  linkToFacebook?: string;
  linkToFacebookGroup?: string;
  linkToLinkedIn?: string;
  linkToGitHub?: string;
  linkToWebsite?: string;
  roles?: string[];
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

          {props.roles?.map((role) => (
            <div
              key="role"
              className={
                styles.pill + " badge rounded-pill text-bg-primary mx-1"
              }
            >
              {role}
            </div>
          ))}

          <div className={styles.profileContent}>{props.content}</div>

          <div>
            {props.linkToWebsite && (
              <SocialLinkIcon
                linkName="Web"
                faIcon={faGlobe}
                link={props.linkToWebsite}
              />
            )}

            {props.linkToLinkedIn && (
              <SocialLinkIcon
                linkName="LinkedIn"
                faIcon={faLinkedin}
                link={props.linkToLinkedIn}
              />
            )}

            {props.linkToFacebook && (
              <SocialLinkIcon
                linkName="Facebook"
                faIcon={faFacebookSquare}
                link={props.linkToFacebook}
              />
            )}

            {props.linkToFacebookGroup && (
              <SocialLinkIcon
                linkName="Facebook skupina"
                faIcon={faUserGroup}
                link={props.linkToFacebookGroup}
              />
            )}

            {props.linkToGitHub && (
              <SocialLinkIcon
                linkName="GitHub"
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
