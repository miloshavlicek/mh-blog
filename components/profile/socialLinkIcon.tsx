import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function SocialLinkIcon(props: {
  faIcon: IconDefinition;
  link: string;
}) {
  return (
    <a className="link" href={props.link} target="_blank">
      <FontAwesomeIcon
        icon={props.faIcon}
        className="h-6 fill-current text-gray-600 hover:text-green-700"
      />
    </a>
  );
}
