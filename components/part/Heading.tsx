import { ReactElement, ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  children: ReactNode;
  level: 1 | 2;
  className?: string;
  headingClassName?: string;
}

export default function Heading({
  children,
  level,
  className,
  headingClassName,
}: Props): ReactElement {
  let heading;

  const commonClasses =
    "fw-bold text-center mt-2 mb-4" +
    (headingClassName ? " " + headingClassName : "");

  switch (level) {
    case 1:
      heading = <h1 className={"display-5 " + commonClasses}>{children}</h1>;
      break;
    case 2:
      heading = <h2 className={"display-6 " + commonClasses}>{children}</h2>;
      break;
    default:
      heading = <div>{children}</div>;
  }

  return <Container className={className}>{heading}</Container>;
}
