// import styles from "./HeadingPitch.module.scss";
import { ReactElement } from "react";
import ClubMembersAvatars from "./data/ClubMembersAvatars";
import { ClubMember } from "../model/ClubMember";

interface Props {
  clubMembers: ClubMember[];
}

export default function HeadingPitch({ clubMembers }: Props): ReactElement {
  return (
    <div>
      <h1 className="display-5 fw-bold">
        Klub osobnostního rozvoje Žij svou vášní
      </h1>

      <p className="lead mb-4">
        👋 Společně utváříme přátelské a inspirativní prostředí vzájemně se
        podporujících lidí, kteří si jdou za svými cíli a sny.
      </p>

      <ClubMembersAvatars clubMembers={clubMembers} className="mb-3" />
    </div>
  );
}
