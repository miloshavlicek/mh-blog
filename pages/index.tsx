import { ReactElement } from "react";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";
import BlogSection from "../components/sections/Blog";
import Divider from "../components/part/Divider";
import { getAllAuthors } from "../model/Author";
import { getAllPosts } from "../model/Post";
import { InferGetStaticPropsType } from "next";
import { getAllTopics } from "../model/Topic";

export default function HomePage({
  authors,
  posts,
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  return (
    <>
      <Container className="p-4">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">
            Klub osobnostního rozvoje Žij svou vášní
          </h1>

          <p className="lead mb-4">
            👋 Společně utváříme přátelské a inspirativní prostředí vzájemně se
            podporujících lidí, kteří si jdou za svými cíli a sny.
          </p>

          <div>
            <Link href="/about">
              <Button variant="outline-primary" size="lg">
                Dozvědět se více
              </Button>
            </Link>
          </div>
        </div>
      </Container>

      <Divider />

      <BlogSection authors={authors} posts={posts} topics={topics} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors(),
      posts: getAllPosts(),
      topics: getAllTopics(),
    },
  };
}
