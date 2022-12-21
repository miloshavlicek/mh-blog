// import styles from "./Members.module.scss";
import { ReactElement } from "react";
import Avatar from "./Avatar";
import styles from "../sections/Blog.module.scss";
import AvatarText from "./AvatarText";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ClubMember } from "../../model/ClubMember";

interface Props {
  members: ClubMember[];
  totalMembersCount?: number;
  avatarsMaxCount?: number;
  className: string;
}

export default function Members({
  members,
  totalMembersCount,
  avatarsMaxCount,
  className,
}: Props): ReactElement {
  avatarsMaxCount = avatarsMaxCount ?? 5;
  const avatarsCount =
    members.length < avatarsMaxCount ? members.length : avatarsMaxCount;
  const restMembersCount = totalMembersCount
    ? totalMembersCount - avatarsCount
    : null;

  return (
    <div className={className}>
      {members.map((member) => (
        <OverlayTrigger overlay={<Tooltip>Miloš</Tooltip>}>
          <Avatar
            profilePhoto={member.profilePhoto}
            alt={`Člen ${member.name}`}
            size={45}
            className={styles.menuAvatar + " me-2 d-inline"}
          />
        </OverlayTrigger>
      ))}

      {restMembersCount && restMembersCount > 0 && (
        <AvatarText
          text={`+${restMembersCount}`}
          size={45}
          className={styles.menuAvatar + " me-2 d-inline-block"}
        />
      )}
    </div>
  );
}
