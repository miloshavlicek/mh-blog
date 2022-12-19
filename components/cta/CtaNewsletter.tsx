import { ReactElement } from "react";

interface Props {
  height?: number;
}

export default function CtaNewsletter({ height }: Props): ReactElement {
  return (
    <iframe
      src="/newsletter.html"
      style={{ width: "100%" }}
      height={height ?? 390}
      className="mt-10"
    ></iframe>
  );
}
