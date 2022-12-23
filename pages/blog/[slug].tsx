import styles from "./[slug].module.scss";
import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Comment from "../../components/ui/Comment";
import distanceToNow from "../../lib/utils/dateRelative";
import { getAllPosts, getPostBySlug } from "../../model/Post";
import markdownToHtml from "../../lib/utils/markdownToHtml";
import Head from "next/head";
import CtaNewsletter from "../../components/cta/CtaNewsletter";
import { ReactNode } from "react";
import { Container, Row } from "react-bootstrap";
import AuthGuard from "../../components/guard/AuthGuard";
import YouTubeVideo from "../../components/ui/YouTubeVideo";
import ProfileCardHuman from "../../components/data/ProfileCardHuman";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import TopicPill from "../../components/ui/TopicPill";
import { getAllTopics } from "../../model/Topic";

export default function PostPage({
  post,
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const content = (
    <div
      className="prose mt-10"
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );

  let article = (
    <>
      {post.workbook && (
        <a
          href={post.workbook}
          target="_blank"
          className="btn btn-lg btn-outline-primary my-2"
        >
          <FontAwesomeIcon icon={faFilePen} className="me-2" />
          Zobrazit pracovní list
        </a>
      )}

      {post.youTubeVideo && <YouTubeVideo slug={post.youTubeVideo} />}

      <div className={styles.content + " mt-4"}>{content}</div>

      {post.topics?.length && (
        <div className="my-4">
          <b>Související témata:</b>
          {post.topics.map((topic: string) => (
            <TopicPill
              slug={topic}
              key={topic}
              link={
                !!topics?.filter((topicsEl) => topicsEl.slug === topic).length
              }
            />
          ))}
        </div>
      )}

      <Comment />
    </>
  );

  if (post.authOnly) {
    article = <AuthGuard>{article}</AuthGuard>;
  }

  return (
    <Container className="p-4">
      <Head>
        <title>{post.title} | Žij svou vášní</title>
      </Head>

      {router.isFallback ? (
        <div>Načítání…</div>
      ) : (
        <Row>
          <div className="col-md-7">
            <article>
              <header>
                <h1 className="text-4xl font-bold">{post.title}</h1>

                {post.excerpt ? (
                  <p className="mt-2 text-xl">{post.excerpt}</p>
                ) : null}

                {post.date && (
                  <time className="flex mt-2 text-gray-400">
                    {distanceToNow(new Date(post.date))}
                  </time>
                )}
              </header>

              {article}
            </article>
          </div>

          <div className="col-md-5 sticky-top">
            {post.organizer && <ProfileCardHuman human={post.organizer} />}

            {post.author && !post.organizer && (
              <ProfileCardHuman human={post.author} />
            )}

            <CtaNewsletter height={420} />
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
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post: {
        ...post,
        content: await markdownToHtml(post?.content ?? ""),
      },
      topics: getAllTopics(),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
