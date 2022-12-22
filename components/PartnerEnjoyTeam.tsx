// import styles from "./PartnerEnjoyTeam.module.scss";
import { ReactElement } from "react";
import Image from "next/image";

interface Props {}

export default function PartnerEnjoyTeam({}: Props): ReactElement {
  return (
    <div className="text-muted text-end mb-3">
      Ve spolupráci s:
      <a href="https://www.facebook.com/groups/727883977279628" target="_blank">
        <Image
          src={"/img/partner/enjoyteam.png"}
          width={18}
          height={30}
          alt="Logo EnjoyTeam"
          className="mx-2"
        />
        <b>EnjoyTeam</b>
      </a>
    </div>
  );
}
