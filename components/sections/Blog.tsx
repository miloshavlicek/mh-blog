import styles from "./Blog.module.scss";
import Link from "next/link";
import distanceToNow from "../../lib/utils/dateRelative";
import {
  Alert,
  Card,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { Author } from "../../model/Author";
import { Post } from "../../model/Post";
import { Topic } from "../../model/Topic";
import Avatar from "../ui/Avatar";
import TopicPill from "../ui/TopicPill";
import Heading from "../part/Heading";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons/faPlayCircle";
import { faFilePen } from "@fortawesome/free-solid-svg-icons/faFilePen";

export default function BlogSection(props: {
  authors?: Author[];
  posts: Post[];
  topics?: Topic[];
}): ReactElement {
  return (
    <Container className="p-4 w-900">
      <Heading level={1}>Blog</Heading>

      <Row>
        <div className="col-md-4">
          {props.authors && (
            <div className="mb-4">
              <h3 className="fw-bold">Autoři</h3>

              <ul className="nav nav-pills flex-column mb-auto">
                {props.authors.map((author: Author) => (
                  <li className="nav-item" key={author.slug}>
                    <Link
                      href={`/blog/authors/${author.slug}`}
                      className={styles.navLink + " nav-link"}
                      aria-current="page"
                    >
                      <Avatar
                        profilePhoto={author.profilePhoto}
                        alt={"Autor " + author.name}
                        size={30}
                        className={styles.menuAvatar + " me-2"}
                      />
                      {author.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {props.topics && (
            <div className="mb-4">
              <h3 className="fw-bold">Témata</h3>

              <ul className="nav nav-pills flex-column mb-auto">
                {props.topics.map((topic: Topic) => (
                  <li className="nav-item">
                    <Link
                      href={`/blog/topics/${topic.slug}`}
                      className={styles.navLink + " nav-link"}
                      aria-current="page"
                    >
                      {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-md-8">
          {props.posts.length > 0 ? (
            props.posts.map((post: Post) => (
              <Card key={post.slug} className="m-4">
                <Card.Body>
                  <Card.Title>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-lg font-bold"
                    >
                      {post.authOnly && (
                        <OverlayTrigger
                          overlay={
                            <Tooltip>
                              Obsah je k dispozici pouze pro přihlášené
                              uživatele.
                            </Tooltip>
                          }
                        >
                          <FontAwesomeIcon
                            icon={faLock}
                            className="me-1 text-muted"
                          />
                        </OverlayTrigger>
                      )}
                      {post.title}
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    <p>{post.excerpt}</p>

                    <div className="text-gray-400">
                      {post.youTubeVideo && (
                        <div className={"d-inline-block me-2"}>
                          <OverlayTrigger
                            overlay={<Tooltip>{"Obsahuje video"}</Tooltip>}
                          >
                            <Link href={`/blog/${post.slug}`}>
                              <FontAwesomeIcon icon={faPlayCircle} />
                            </Link>
                          </OverlayTrigger>
                        </div>
                      )}

                      {post.workbook && (
                        <div className={"d-inline-block me-2"}>
                          <OverlayTrigger
                            overlay={
                              <Tooltip>{"Obsahuje pracovní list"}</Tooltip>
                            }
                          >
                            <Link href={`/blog/${post.slug}`}>
                              <FontAwesomeIcon icon={faFilePen} />
                            </Link>
                          </OverlayTrigger>
                        </div>
                      )}

                      {post.date && (
                        <OverlayTrigger
                          overlay={
                            <Tooltip>{"Publikováno: " + post.date}</Tooltip>
                          }
                        >
                          <time className={"me-2"}>
                            {distanceToNow(new Date(post.date))}
                          </time>
                        </OverlayTrigger>
                      )}

                      {post.organizer && (
                        <OverlayTrigger
                          overlay={
                            <Tooltip>
                              {"Pořadatel: " + post.organizer.name}
                            </Tooltip>
                          }
                        >
                          <div className="d-inline me-2">
                            <Link href={"/members/" + post.organizer.slug}>
                              <Avatar
                                profilePhoto={post.organizer.profilePhoto}
                                alt={"Pořadatel " + post.organizer.name}
                                size={30}
                                className={styles.menuAvatar}
                              />
                            </Link>
                          </div>
                        </OverlayTrigger>
                      )}

                      {post.author &&
                        post.author.slug !== post.organizer?.slug && (
                          <OverlayTrigger
                            overlay={
                              <Tooltip>
                                {"Autor textu: " + post.author.name}
                              </Tooltip>
                            }
                          >
                            <div className="d-inline me-2">
                              <Link href={"/blog/people/" + post.author.slug}>
                                <Avatar
                                  profilePhoto={post.author.profilePhoto}
                                  alt={"Autor " + post.author.name}
                                  size={30}
                                  className={styles.menuAvatar}
                                />
                              </Link>
                            </div>
                          </OverlayTrigger>
                        )}

                      {post.topics?.map((topic: string) => (
                        <TopicPill
                          slug={topic}
                          key={topic}
                          link={
                            !!props.topics?.filter(
                              (topicsEl) => topicsEl.slug === topic
                            ).length
                          }
                        />
                      ))}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div className="pt-4 pb-2 text-center">
              <Alert variant="warning">
                Nejsou k dispozici žádné příspěvky.
              </Alert>
            </div>
          )}
        </div>
      </Row>
    </Container>
  );
}
