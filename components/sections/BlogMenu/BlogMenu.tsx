import { ReactElement } from "react";
import { Author } from "../../../model/Author";
import { Topic } from "../../../model/Topic";
import BlogMenuAuthors from "./BlogMenuAuthors";
import BlogMenuTopics from "./BlogMenuTopics";

interface Props {
  authors?: Author[];
  topics?: Topic[];
}

export default function BlogMenu({ authors, topics }: Props): ReactElement {
  return (
    <>
      {authors && <BlogMenuAuthors authors={authors} />}

      {topics && <BlogMenuTopics topics={topics} />}
    </>
  );
}
