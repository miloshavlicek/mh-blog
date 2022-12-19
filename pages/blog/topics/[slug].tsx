import styles from "./[slug].module.scss";
import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import distanceToNow from "../../../lib/utils/dateRelative";
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
import { getAllPosts, Post } from "../../../model/Post";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { getAllTopics, getTopicBySlug } from "../../../model/Topic";
import Heading from "../../../components/part/Heading";

export default function PostsAuthorPage({
  topic,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  const router = useRouter();

  if (!router.isFallback && !topic?.slug) {
    return <ErrorPage statusCode={404} />;
  } else if (!topic) {
    return <></>;
  }

  return (
    <Container className="p-4 w-900">
      <Head>
        <title>Téma {topic.title} | Žij svou vášní</title>
      </Head>

      <Heading level={1}>Blog</Heading>

      {router.isFallback ? (
        <div>Načítání…</div>
      ) : (
        <Row>
          <div className="col-md-5">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className={styles.navItem + " nav-item"}>
                <Link
                  href={`/blog`}
                  className={styles.navLink + " nav-link"}
                  aria-current="page"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
                  Všechny příspěvky
                </Link>
              </li>
            </ul>

            <div className={styles.leftCol}>
              <h2 className="fw-bold">{topic.title}</h2>
              {topic.description}
            </div>
          </div>
          <div className="col-md-7">
            {posts.length > 0 ? (
              posts.map((post: Post) => (
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
                    <div>
                      <p>{post.excerpt}</p>
                      {post.date && (
                        <div className="text-gray-400">
                          <time>{distanceToNow(new Date(post.date))}</time>
                        </div>
                      )}
                    </div>
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
      )}
    </Container>
  );
}

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      topic: getTopicBySlug(params.slug),
      posts: getAllPosts().filter((post: Post) =>
        post.topics?.includes(params.slug)
      ),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllTopics().map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
