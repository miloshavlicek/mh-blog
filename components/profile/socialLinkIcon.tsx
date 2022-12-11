import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function SocialLinkIcon(props: {
  socialSiteName: string;
  faIcon: IconDefinition;
  link: string;
}) {
  return (
    <a
      className="link"
      href={props.link}
      target="_blank"
      aria-label={"Přejít na sociální síť " + props.socialSiteName}
    >
      <FontAwesomeIcon
        icon={props.faIcon}
        className="h-6 fill-current text-gray-600 hover:text-green-700"
      />
    </a>
  );
}
