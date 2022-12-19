import styles from "./Avatar.module.scss";
import Image from "next/image";

export default function Avatar(props: {
  profilePhoto: string;
  alt?: string;
  size: number;
  className: string;
}) {
  return (
    <Image
      src={props.profilePhoto}
      alt={props.alt ?? "Avatar"}
      width={props.size}
      height={props.size}
      className={
        styles.avatar +
        " rounded-circle" +
        (props.className ? " " + props.className : "")
      }
    />
  );
}
