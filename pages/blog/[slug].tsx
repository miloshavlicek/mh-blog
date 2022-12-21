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

export default function PostPage({
  post,
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
      {post.youTubeVideo && <YouTubeVideo slug={post.youTubeVideo} />}

      <div className="mt-4">{content}</div>

      <Comment />
    </>
  );

  if (post.authOnly) {
    article = <AuthGuard>{article}</AuthGuard>;
  }

  const author = post.author;

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
            {author && <ProfileCardHuman human={author} />}

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
