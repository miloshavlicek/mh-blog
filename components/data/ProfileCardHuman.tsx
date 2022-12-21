// import styles from "./ProfileCardHuman.module.scss";
import { ReactElement } from "react";
import ProfileCard from "../profile/ProfileCard";
import { Human } from "../../model/Human";

interface Props {
  human: Human;
}

export default function ProfileCardHuman({ human }: Props): ReactElement {
  return (
    <ProfileCard
      name={human.name}
      jobTitle={human.jobTitle}
      profilePhoto={human.profilePhoto}
      content={human.content}
      linkToWebsite={human.linkToWebsite}
      linkToFacebook={human.linkToFacebook}
      linkToFacebookGroup={human.linkToFacebookGroup}
      linkToLinkedIn={human.linkToLinkedIn}
      linkToGitHub={human.linkToGitHub}
      location={human.location}
      roles={human.roles}
    />
  );
}
