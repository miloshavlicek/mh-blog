import styles from "./AvatarText.module.scss";

export default function AvatarText(props: {
  text: string;
  size: number;
  className: string;
}) {
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
      }}
      className={
        styles.avatar +
        " rounded-circle" +
        (props.className ? " " + props.className : "")
      }
    >
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
