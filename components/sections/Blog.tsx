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
import Heading from "../part/Heading";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons/faPlayCircle";
import { faFilePen } from "@fortawesome/free-solid-svg-icons/faFilePen";
import BlogMenu from "./BlogMenu/BlogMenu";

interface Props {
  authors?: Author[];
  posts: Post[];
  topics?: Topic[];
  hideMenu?: "sm" | "md" | "lg" | boolean;
  limit?: number;
}

export default function BlogSection({
  authors,
  posts,
  topics,
  hideMenu,
  limit,
}: Props): ReactElement {
  return (
    <Container className="p-4 w-900">
      <Heading level={1}>Blog</Heading>

      <Row>
        <div
          className={
            "col-md-4" +
            (hideMenu
              ? " d-none" +
                (hideMenu !== true ? " d-" + hideMenu + "-block" : "")
              : "")
          }
        >
          <BlogMenu authors={authors} topics={topics} />
        </div>

        <div
          className={
            hideMenu === true
              ? "col-12"
              : "col-" + (!hideMenu ? "md" : hideMenu) + "-8"
          }
        >
          {posts.length > 0 ? (
            posts.slice(0, limit).map((post: Post) => (
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
                  <Card.Body className="p-0">
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
                              <Link href={"/blog/authors/" + post.author.slug}>
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
                    </div>
                  </Card.Body>
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

          {limit && posts.length > limit && (
            <div className="text-center">
              <Link href={"/blog"}>
                <button className="btn btn-outline-primary">
                  Zobrazit další příspěvky
                </button>
              </Link>
            </div>
          )}
        </div>
      </Row>
    </Container>
  );
}
