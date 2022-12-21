// import styles from "./ClubMembersAvatars.module.scss";
import { ReactElement } from "react";
import { ClubMember } from "../../model/ClubMember";
import Members from "../ui/Members";

interface Props {
  clubMembers: ClubMember[];
  className: string;
}

export default function ClubMembersAvatars({
  clubMembers,
  className,
}: Props): ReactElement {
  return (
    <Members
      members={clubMembers}
      className={className}
      totalMembersCount={66}
      avatarsMaxCount={5}
    />
  );
}
